
const axios = require("axios");
const cheerio = require("cheerio");

const app2 = async function component() {
    // ใช้ axios ส่ง request เพื่อร้องขอข้อมูลแล้วให้ response ข้อมูลกลับ
    const html = await fetchData('https://www.apple.com/th/macbook-air')
    // เมื่อได้ HTML จาก axios แล้วก็ส่งไปสกัดเพื่อเอาเฉพาะข้อมูลที่ต้องการ
    const result = extractData(html)
    
    let  res = ""
    if (result == 'ดูราคา') {
             res = 'ยังไม่เปิดให้ซื้อ Macbook Air M2';
      } else {
             res = 'เปิดให้ซื้อ Macbook Air M2 แล้ว';
      }


    return res;
  }
  

const fetchData = (url) => {
    // ส่ง request เพื่อร้องขอข้อมูลหน้าเว็บเพจทั้งหน้า
    return axios.get(url).then(response => response.data)
  }


  const extractData = (html) => {
    // ส่งข้อมูล HTML เข้า Method load ของ cheerio
    // จากนั้นเราสามารถเข้าถึงข้อมูลทุก Element ผ่านตัวแปร $
    const $ = cheerio.load(html);
  
    // ดึงข้อมูล weekendOf จาก Selector ที่เราได้วิเคราะห์ไว้ แล้วสกัดข้อมูล Text ออกมา
    const weekendOf = $('#compare-table-notebooks > div > div.mba-m2.links > a').text()
    
    return weekendOf
  }
  

  module.exports = { app2 };
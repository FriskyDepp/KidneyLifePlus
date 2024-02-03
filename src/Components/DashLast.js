import React from 'react'
import './DashLast.css'
import NewCircle from '../Assets/risk-cir.png'
import His from '../Assets/his.png'
import Hospital from '../Assets/hospital 1.png'
import Docters from '../Assets/medical-team 1.png'

const DashLast = () => {
  return (
    <div className='dashboard-container'>
        <h1 className='das-title'>DASHBOARD</h1>
        <div className='upper-contaier'>
            <div className='risk-conn'>
                <p>คุณมีความเสี่ยงเป็นโรคไตเรื้อรังโดยภาพรวม</p>
                <img src={NewCircle}/>

            </div>
            <div className='his-conn'>
                <p>ประวัติการใช้งาน</p>
                <img src={His}/>
            </div>
        </div>
        <div className='lower-container'>
            <div className='sug-conn'>
                <p>คำแนะนำสำหรับระยะที่คุณมีความเสี่ยง</p>
                <h1>ระยะที่ 3</h1>
                <span>ไตเรื้อรังระยะที่ 3 : โรคไตเรื้อรังระยะปานกลาง ซึ่งไตจะทำงานได้ 30 – 60%</span>
                <span>การปรับพฤติกรรม : ผู้ป่วยต้องจำกัดอาหารประเภทโปรตีน</span>

            </div>
            <div className='button-container'>
                <button className='hos-butt'>
                    <img src={Hospital}/>
                    ค้นหาโรงพยาบาลใกล้เคียง

                </button>
                <button className='docs-butt'>
                    <img src={Docters}/>
                    ดูตารางนัดหมายแพทย์

                </button>
            </div>

        </div>
    </div>
  )
}

export default DashLast
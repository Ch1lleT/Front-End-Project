import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <div class="detail-header">
        <img src="/assets/Title.png" alt="" />
        <h1>{{ title }}</h1>
      </div>
      
      <div class="detail-content">
        <div class="main-image">
          <img [src]="mainImage" alt="" />
        </div>
        
        <div class="description">
          <p>{{ description }}</p>
        </div>
        
        <div class="additional-info">
          <div class="info-box" *ngFor="let info of additionalInfo">
            <h3>{{ info.title }}</h3>
            <p>{{ info.content }}</p>
          </div>
        </div>
        
        <div class="social-media">
          <a href="#" *ngFor="let social of socialLinks">
            <img [src]="social.icon" alt="{{ social.name }}" />
          </a>
        </div>
      </div>
      
      <div class="back-button" (click)="goBack()">
        <span>กลับ</span>
      </div>
    </div>
  `,
  styles: [`
    .detail-container {
      width: 100%;
      padding: 2rem;
      background-color: #f4f4f4;
    }
    
    .detail-header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .detail-header img {
      height: 60px;
      margin-right: 1rem;
    }
    
    .detail-header h1 {
      font-size: 2.5rem;
      color: #006064;
    }
    
    .main-image img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    
    .description {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .additional-info {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .info-box {
      background-color: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .social-media {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .social-media img {
      width: 30px;
      height: 30px;
    }
    
    .back-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #006064;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
  `]
})
export class DetailComponent implements OnInit {
  @Input() province: string = '';

  title: string = '';
  mainImage: string = '';
  description: string = '';
  additionalInfo: { title: string, content: string }[] = [];
  socialLinks: { name: string, icon: string }[] = [];

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    if (this.province === 'Chiang_Rai') {
      this.title = 'ไร่ชาฉุยฟง เชียงราย';
      this.mainImage = '/assets/Chiang_Rai/image 16.png';
      this.description = 'เวลาพูดถึงไร่ชาที่เชียงราย มันก็มีให้สัมผัสอยู่หลายที่ แต่ที่นี่ถือเป็นสถานที่พลาดไม่ได้เลย ไร่ชาฉุยฟงเป็นพื้นที่ปลูกชาขนาดใหญ่ บนเนื้อที่กว่า 1,200 ไร่ วิวสวยจนต้องหยุดถ่ายรูป';
      this.additionalInfo = [
        {
          title: 'กิจกรรมน่าสนใจ',
          content: 'การเดินชมไร่ชา ถ่ายรูปกับวิวสวยๆ และจิบชาชมวิวโรงน้ำชา'
        },
        {
          title: 'เวลาเปิด-ปิด',
          content: 'เปิดทุกวัน 08.30-17.30 น.'
        },
        {
          title: 'ค่าเข้าชม',
          content: 'ฟรี (มีค่าบริการหากต้องการเข้าร้านน้ำชา)'
        }
      ];
    } else if (this.province === 'Kanchanaburi') {
      this.title = 'สะพานข้ามแม่น้ำแคว กาญจนบุรี';
      this.mainImage = '/assets/Kanchanaburi/image 16.png';
      this.description = 'สะพานข้ามแม่น้ำแควเป็นส่วนหนึ่งของเส้นทางรถไฟสายมรณะ ที่สร้างขึ้นในสมัยสงครามโลกครั้งที่ 2 โดยผู้ถูกเกณฑ์แรงงานและเชลยศึก ปัจจุบันเป็นสถานที่ท่องเที่ยวและอนุสรณ์แห่งประวัติศาสตร์ที่สำคัญของจังหวัดกาญจนบุรี';
      this.additionalInfo = [
        {
          title: 'กิจกรรมน่าสนใจ',
          content: 'เดินข้ามสะพาน ถ่ายภาพ นั่งรถไฟ และชมพิพิธภัณฑ์ใกล้เคียง'
        },
        {
          title: 'เวลาเปิด-ปิด',
          content: 'เปิดตลอดเวลา (พิพิธภัณฑ์ 08.00-18.00 น.)'
        },
        {
          title: 'งานประจำปี',
          content: 'สัปดาห์สะพานข้ามแม่น้ำแคว จัดขึ้นในช่วงปลายเดือนพฤศจิกายน - ต้นเดือนธันวาคมของทุกปี'
        }
      ];
    }

    // Social media links สำหรับทั้งสองสถานที่
    this.socialLinks = [
      { name: 'Instagram', icon: '/assets/icons/instagram.png' },
      { name: 'Facebook', icon: '/assets/icons/facebook.png' },
      { name: 'Twitter', icon: '/assets/icons/twitter.png' },
      { name: 'Line', icon: '/assets/icons/line.png' }
    ];
  }

  goBack(): void {
    // ส่งคำสั่งให้กลับไปหน้าหลัก (ต้องเชื่อมต่อกับ service)
    // this.provinceService.clearSelectedProvince();
    window.history.back();
  }
}
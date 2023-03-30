let allProducts = [
  {
    "id": 5,
    "title": "1",
    "image": "/images/canon/1.jpg",
    "category": "impriment"
  },
  {
    "id": 6,
    "title": "2",
    "image": "/images/canon/2.jpg",
    "category": "impriment"
  },
  {
    "id": 7,
    "title": "Canon-3010B-Printer3",
    "image": "/images/canon/canon-3010b-printer3.jpg",
    "category": "impriment"
  },
  {
    "id": 8,
    "title": "2Mp",
    "image": "/images/Dahua/2mp.jpg",
    "category": "camera"
  },
  {
    "id": 9,
    "title": "5Mp",
    "image": "/images/Dahua/5MP.jpg",
    "category": "camera"
  },
  {
    "id": 10,
    "title": "16",
    "image": "/images/DVR/16.jpg",
    "category": "dvr"
  },
  {
    "id": 11,
    "title": "16Hik",
    "image": "/images/DVR/16HIK.jpg",
    "category": "dvr"
  },
  {
    "id": 12,
    "title": "4Hik",
    "image": "/images/DVR/4HIK.jpg",
    "category": "dvr"
  },
  {
    "id": 13,
    "title": "8Hik",
    "image": "/images/DVR/8HIK.jpg",
    "category": "dvr"
  },
  {
    "id": 14,
    "title": "Dahua-Nvr-8-Channel-500X500-500X500",
    "image": "/images/DVR/dahua-nvr-8-channel-500x500-500x500.webp",
    "category": "dvr"
  },
  {
    "id": 15,
    "title": "Dvr4",
    "image": "/images/DVR/DVR4.jpg",
    "category": "dvr"
  },
  {
    "id": 16,
    "title": "2Mphik",
    "image": "/images/HIKVISION/2mphik.jpg",
    "category": "camera"
  },
  {
    "id": 17,
    "title": "2Mphikvision",
    "image": "/images/HIKVISION/2mphikvision.jpg",
    "category": "camera"
  },
  {
    "id": 18,
    "title": "4Mp",
    "image": "/images/HIKVISION/4mp.jpg",
    "category": "camera"
  },
  {
    "id": 19,
    "title": "4Mphik",
    "image": "/images/HIKVISION/4MPHIK.jpg",
    "category": "camera"
  },
  {
    "id": 20,
    "title": "4Mphikk",
    "image": "/images/HIKVISION/4MPHIKK.jpg",
    "category": "camera"
  },
  {
    "id": 21,
    "title": "5Mphik",
    "image": "/images/HIKVISION/5MPHIK.jpg",
    "category": "camera"
  },
  {
    "id": 22,
    "title": "Cctvcamera8Mp",
    "image": "/images/HIKVISION/cctvcamera8MP.jpg",
    "category": "camera"
  },
  {
    "id": 23,
    "title": "Ds-2Cd2125Fwd-Is 5Mp",
    "image": "/images/HIKVISION/ds-2cd2125fwd-is 5MP.jpg",
    "category": "camera"
  },
  {
    "id": 24,
    "title": "Ds-2Cd2T55Fwd-I8  5Mp",
    "image": "/images/HIKVISION/ds-2cd2t55fwd-i8  5MP.jpg",
    "category": "camera"
  },
  {
    "id": 25,
    "title": "Gsobild 135536 M 8Mp",
    "image": "/images/HIKVISION/gsobild_135536_m 8MP.jpg",
    "category": "camera"
  },
  {
    "id": 26,
    "title": "Hac-Hfw2200R-Vf 1",
    "image": "/images/HIKVISION/HAC-HFW2200R-VF_1.png",
    "category": "camera"
  },
  {
    "id": 27,
    "title": "Hikvision Ds 2Cd2T55Fwd I5 6Mm 5Mp Day Night Outdoor Bullet 1346681",
    "image": "/images/HIKVISION/hikvision_ds_2cd2t55fwd_i5_6mm_5mp_day_night_outdoor_bullet_1346681.jpg",
    "category": "camera"
  },
  {
    "id": 28,
    "title": "Hikvision Ds 2Cd4125Fwd Iz Lightfighter Series 2Mp Smart 1220519",
    "image": "/images/HIKVISION/hikvision_ds_2cd4125fwd_iz_lightfighter_series_2mp_smart_1220519.jpg",
    "category": "camera"
  },
  {
    "id": 29,
    "title": "Hikvision Ect D32V2 2Mp Outdoor Exir Dome 1427861",
    "image": "/images/HIKVISION/hikvision_ect_d32v2_2mp_outdoor_exir_dome_1427861.jpg",
    "category": "camera"
  },
  {
    "id": 30,
    "title": "Oip8Mp",
    "image": "/images/HIKVISION/OIP8MP.jpg",
    "category": "camera"
  },
  {
    "id": 31,
    "title": "R",
    "image": "/images/HIKVISION/R.jpg",
    "category": "camera"
  },
  {
    "id": 32,
    "title": "263051",
    "image": "/images/imphp/263051.jpg",
    "category": "impriment"
  },
  {
    "id": 33,
    "title": "Hp-Pagewide-Pro-477-3",
    "image": "/images/imphp/hp-pagewide-pro-477-3.jpg",
    "category": "impriment"
  },
  {
    "id": 34,
    "title": "Oip2",
    "image": "/images/imphp/OIP2.jpg",
    "category": "impriment"
  },
  {
    "id": 35,
    "title": "1040",
    "image": "/images/KYOCERA/1040.jpg",
    "category": "impriment"
  },
  {
    "id": 36,
    "title": "Kyocera-Taskalfa-4052Ci F",
    "image": "/images/KYOCERA/kyocera-taskalfa-4052ci_f.jpg",
    "category": "impriment"
  },
  {
    "id": 37,
    "title": "Kyocera-Taskalfa-5003I-768X768",
    "image": "/images/KYOCERA/Kyocera-TASKalfa-5003i-768x768.jpg",
    "category": "impriment"
  },
  {
    "id": 38,
    "title": "M2135",
    "image": "/images/KYOCERA/M2135.jpg",
    "category": "impriment"
  },
  {
    "id": 39,
    "title": "Taskalfa-2020",
    "image": "/images/KYOCERA/taskalfa-2020.jpg",
    "category": "impriment"
  },
  {
    "id": 40,
    "title": "4Ac46203Ab5444F53Def4Cfb253C322B",
    "image": "/images/comunication/4ac46203ab5444f53def4cfb253c322b.jpg",
    "category": "cominication"
  },
  {
    "id": 41,
    "title": "7B092D5Dd5132014C2E8195415E56Bf6",
    "image": "/images/comunication/7b092d5dd5132014c2e8195415e56bf6.jpg",
    "category": "cominication"
  },
  {
    "id": 42,
    "title": "A",
    "image": "/images/LICENCE/a.webp",
    "category": "licence"
  },
  {
    "id": 43,
    "title": "Dp1400 3 1",
    "image": "/images/comunication/dp1400_3_1.jpg",
    "category": "cominication"
  },
  {
    "id": 44,
    "title": "Oip",
    "image": "/images/LICENCE/OIP.jpg",
    "category": "licence"
  },
  {
    "id": 45,
    "title": "Oip1",
    "image": "/images/comunication/OIP1.jpg",
    "category": "cominication"
  },
  {
    "id": 46,
    "title": "Whatsapp Image 2023-03-27 At 7.57.39 Am",
    "image": "/images/LICENCE/WhatsApp Image 2023-03-27 at 7.57.39 AM.jpeg",
    "category": "licence"
  },
  {
    "id": 47,
    "title": "Apc 3000Va Lcd Rm 2U 120V Rackmount Ups",
    "image": "/images/ondileur/APC 3000VA LCD RM 2U 120V RACKMOUNT UPS.jpg",
    "category": "ondileur"
  },
  {
    "id": 48,
    "title": "Apc 8-Port Back-Ups Es Ups (390W650Va)",
    "image": "/images/ondileur/APC 8-PORT BACK-UPS ES UPS (390W650VA).jpg",
    "category": "ondileur"
  },
  {
    "id": 49,
    "title": "Apc Smart-Ups 1500Va Wsmartconnect",
    "image": "/images/ondileur/APC SMART-UPS 1500VA WSMARTCONNECT.jpg",
    "category": "ondileur"
  },
  {
    "id": 50,
    "title": "Apc Smt1000C 700W 1000Va Ups",
    "image": "/images/ondileur/APC SMT1000C 700W 1000VA UPS.jpg",
    "category": "ondileur"
  },
  {
    "id": 51,
    "title": "Apc Smt750C Smart-Ups 750Va 500W Ups",
    "image": "/images/ondileur/APC SMT750C SMART-UPS 750VA 500W UPS.jpg",
    "category": "ondileur"
  },
  {
    "id": 52,
    "title": "Hp290G4",
    "image": "/images/pc_fix/hp290g4.jpg",
    "category": "pc_fix"
  },
  {
    "id": 53,
    "title": "17Pouce",
    "image": "/images/PORTABL_HP/17pouce.jpg",
    "category": "portable"
  },
  {
    "id": 54,
    "title": "2C21F11Ec452136Ebbc8747C6Aaf2D3D",
    "image": "/images/PORTABL_HP/2c21f11ec452136ebbc8747c6aaf2d3d.jpg",
    "category": "portable"
  },
  {
    "id": 55,
    "title": "C06615436 1750X1285",
    "image": "/images/PORTABL_HP/c06615436_1750x1285.jpg",
    "category": "portable"
  },
  {
    "id": 56,
    "title": "Hp-Elitebook-X360-1030-G4-Todo-Sobre-Este-Convertible-Premium",
    "image": "/images/PORTABL_HP/HP-EliteBook-x360-1030-G4-todo-sobre-este-convertible-premium.jpg",
    "category": "portable"
  },
  {
    "id": 57,
    "title": "Hp-Pc-Portable-Pavilion-14-Ce3035Nf-14-Fhd-I5",
    "image": "/images/PORTABL_HP/hp-pc-portable-pavilion-14-ce3035nf-14-fhd-i5.jpg",
    "category": "portable"
  },
  {
    "id": 58,
    "title": "Hp Elite X2 1013 5D1F5205D8E9F",
    "image": "/images/PORTABL_HP/HP_Elite_x2_1013_5d1f5205d8e9f.png",
    "category": "portable"
  },
  {
    "id": 59,
    "title": "I3",
    "image": "/images/PORTABL_HP/i3.jpg",
    "category": "portable"
  },
  {
    "id": 60,
    "title": "I7 15Pouce",
    "image": "/images/PORTABL_HP/i7_15pouce.jpg",
    "category": "portable"
  },
  {
    "id": 61,
    "title": "Pc-Portable-Hp-Pavilion-15-Cc001Nk-I3-7100U-7Gen-4Gb-Ram-500G-Hdd-1Vq14Ea I3",
    "image": "/images/PORTABL_HP/pc-portable-hp-pavilion-15-cc001nk-i3-7100u-7gen-4gb-ram-500g-hdd-1vq14ea i3.jpg",
    "category": "portable"
  },
  {
    "id": 62,
    "title": "24Ports Poe",
    "image": "/images/switch/24ports poe.jpg",
    "category": "resaux"
  },
  {
    "id": 63,
    "title": "Cisco - Slm2048 - 48-Port Jpg",
    "image": "/images/switch/CISCO - SLM2048 - 48-port jpg.jpg",
    "category": "resaux"
  },
  {
    "id": 64,
    "title": "Cisco 24-Port Unmanaged Rack Switch",
    "image": "/images/switch/CISCO 24-port unmanaged Rack Switch.png",
    "category": "resaux"
  },
  {
    "id": 65,
    "title": "Cisco Sf300-08 8 Port  Small Business Switch S",
    "image": "/images/switch/Cisco SF300-08 8 Port  Small Business Switch S.jpg",
    "category": "resaux"
  },
  {
    "id": 66,
    "title": "Cisco 24Ports",
    "image": "/images/switch/cisco_24ports.jpg",
    "category": "resaux"
  },
  {
    "id": 67,
    "title": "D-Link Go-Sw 5G-Sawitch 5 Ports Gigabit",
    "image": "/images/switch/d-link GO-SW_5G-Sawitch 5 ports Gigabit.jpg",
    "category": "resaux"
  },
  {
    "id": 68,
    "title": "T-Plink 24 Ports",
    "image": "/images/switch/t-plink 24 ports.jpg",
    "category": "resaux"
  },
  {
    "id": 69,
    "title": "T-Plink 5Porte",
    "image": "/images/switch/T-plink 5porte.jpg",
    "category": "resaux"
  },
  {
    "id": 70,
    "title": "Tp-Link 48 Port10-100-1000Mbps Gigabit Ethernet Switch",
    "image": "/images/switch/TP-LINK 48 PORT10-100-1000Mbps GIGABIT ETHERNET SWITCH.jpg",
    "category": "resaux"
  },
  {
    "id": 71,
    "title": "Tp-Link 8-Port Desktop",
    "image": "/images/switch/TP-Link 8-Port Desktop.webp",
    "category": "resaux"
  },
  {
    "id": 72,
    "title": "Tplink-Switch-5 Ports",
    "image": "/images/switch/Tplink-Switch-5 Ports.jpg",
    "category": "resaux"
  },
  {
    "id": 73,
    "title": "Ubiquiti Unifi 802.11Ac 3X3 Pro Access Point",
    "image": "/images/switch/UBIQUITI UNIFI 802.11AC 3X3 PRO ACCESS POINT.jpg",
    "category": "resaux"
  },
  {
    "id": 74,
    "title": "Ubiquiti Unifi Wifi 6 Pro Access Point ",
    "image": "/images/switch/UBIQUITI UNIFI WIFI 6 PRO ACCESS POINT .png",
    "category": "resaux"
  },
  {
    "id": 75,
    "title": "Logitech",
    "image": "/images/video_conferance/logitech.jpg",
    "category": "camera"
  }
]
export default allProducts;


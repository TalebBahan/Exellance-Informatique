-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2023 at 07:24 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `image`, `category`) VALUES
(1, '1', '1.jpg', 'impriment'),
(2, '2', '2.jpg', 'impriment'),
(3, 'Canon-3010B-Printer3', 'canon-3010b-printer3.jpg', 'impriment'),
(4, '2Mp', '2mp.jpg', 'camera'),
(5, '5Mp', '5MP.jpg', 'camera'),
(6, '16', '16.jpg', 'dvr'),
(7, '16Hik', '16HIK.jpg', 'dvr'),
(8, '4Hik', '4HIK.jpg', 'dvr'),
(9, '8Hik', '8HIK.jpg', 'dvr'),
(10, 'Dahua-Nvr-8-Channel-500X500-500X500', 'dahua-nvr-8-channel-500x500-500x500.webp', 'dvr'),
(11, 'Dvr4', 'DVR4.jpg', 'dvr'),
(12, '2Mphik', '2mphik.jpg', 'camera'),
(13, '2Mphikvision', '2mphikvision.jpg', 'camera'),
(14, '4Mp', '4mp.jpg', 'camera'),
(15, '4Mphik', '4MPHIK.jpg', 'camera'),
(16, '4Mphikk', '4MPHIKK.jpg', 'camera'),
(17, '5Mphik', '5MPHIK.jpg', 'camera'),
(18, 'Cctvcamera8Mp', 'cctvcamera8MP.jpg', 'camera'),
(19, 'Ds-2Cd2125Fwd-Is 5Mp', 'ds-2cd2125fwd-is 5MP.jpg', 'camera'),
(20, 'Ds-2Cd2T55Fwd-I8  5Mp', 'ds-2cd2t55fwd-i8  5MP.jpg', 'camera'),
(21, 'Gsobild 135536 M 8Mp', 'gsobild_135536_m 8MP.jpg', 'camera'),
(22, 'Hac-Hfw2200R-Vf 1', 'HAC-HFW2200R-VF_1.png', 'camera'),
(23, 'Hikvision Ds 2Cd2T55Fwd I5 6Mm 5Mp Day Night Outdoor Bullet 1346681', 'hikvision_ds_2cd2t55fwd_i5_6mm_5mp_day_night_outdoor_bullet_1346681.jpg', 'camera'),
(24, 'Hikvision Ds 2Cd4125Fwd Iz Lightfighter Series 2Mp Smart 1220519', 'hikvision_ds_2cd4125fwd_iz_lightfighter_series_2mp_smart_1220519.jpg', 'camera'),
(25, 'Hikvision Ect D32V2 2Mp Outdoor Exir Dome 1427861', 'hikvision_ect_d32v2_2mp_outdoor_exir_dome_1427861.jpg', 'camera'),
(26, 'Oip8Mp', 'OIP8MP.jpg', 'camera'),
(27, 'R', 'R.jpg', 'camera'),
(28, '263051', '263051.jpg', 'impriment'),
(29, 'Hp-Pagewide-Pro-477-3', 'hp-pagewide-pro-477-3.jpg', 'impriment'),
(30, 'Oip2', 'OIP2.jpg', 'impriment'),
(31, '1040', '1040.jpg', 'impriment'),
(32, 'Kyocera-Taskalfa-4052Ci F', 'kyocera-taskalfa-4052ci_f.jpg', 'impriment'),
(33, 'Kyocera-Taskalfa-5003I-768X768', 'Kyocera-TASKalfa-5003i-768x768.jpg', 'impriment'),
(34, 'M2135', 'M2135.jpg', 'impriment'),
(35, 'Taskalfa-2020', 'taskalfa-2020.jpg', 'impriment'),
(36, '4Ac46203Ab5444F53Def4Cfb253C322B', '4ac46203ab5444f53def4cfb253c322b.jpg', 'cominication'),
(37, '7B092D5Dd5132014C2E8195415E56Bf6', '7b092d5dd5132014c2e8195415e56bf6.jpg', 'cominication'),
(38, 'A', 'a.webp', 'licence'),
(39, 'Dp1400 3 1', 'dp1400_3_1.jpg', 'cominication'),
(40, 'Oip', 'OIP.jpg', 'licence'),
(41, 'Oip1', 'OIP1.jpg', 'cominication'),
(42, 'Whatsapp Image 2023-03-27 At 7.57.39 Am', 'WhatsApp Image 2023-03-27 at 7.57.39 AM.jpeg', 'licence'),
(43, 'Apc 3000Va Lcd Rm 2U 120V Rackmount Ups', 'APC 3000VA LCD RM 2U 120V RACKMOUNT UPS.jpg', 'ondileur'),
(44, 'Apc 8-Port Back-Ups Es Ups (390W650Va)', 'APC 8-PORT BACK-UPS ES UPS (390W650VA).jpg', 'ondileur'),
(45, 'Apc Smart-Ups 1500Va Wsmartconnect', 'APC SMART-UPS 1500VA WSMARTCONNECT.jpg', 'ondileur'),
(46, 'Apc Smt1000C 700W 1000Va Ups', 'APC SMT1000C 700W 1000VA UPS.jpg', 'ondileur'),
(47, 'Apc Smt750C Smart-Ups 750Va 500W Ups', 'APC SMT750C SMART-UPS 750VA 500W UPS.jpg', 'ondileur'),
(48, 'Hp290G4', 'hp290g4.jpg', 'pc_fix'),
(49, '17Pouce', '17pouce.jpg', 'portable'),
(50, '2C21F11Ec452136Ebbc8747C6Aaf2D3D', '2c21f11ec452136ebbc8747c6aaf2d3d.jpg', 'portable'),
(51, 'C06615436 1750X1285', 'c06615436_1750x1285.jpg', 'portable'),
(52, 'Hp-Elitebook-X360-1030-G4-Todo-Sobre-Este-Convertible-Premium', 'HP-EliteBook-x360-1030-G4-todo-sobre-este-convertible-premium.jpg', 'portable'),
(53, 'Hp-Pc-Portable-Pavilion-14-Ce3035Nf-14-Fhd-I5', 'hp-pc-portable-pavilion-14-ce3035nf-14-fhd-i5.jpg', 'portable'),
(54, 'Hp Elite X2 1013 5D1F5205D8E9F', 'HP_Elite_x2_1013_5d1f5205d8e9f.png', 'portable'),
(55, 'I3', 'i3.jpg', 'portable'),
(56, 'I7 15Pouce', 'i7_15pouce.jpg', 'portable'),
(57, 'Pc-Portable-Hp-Pavilion-15-Cc001Nk-I3-7100U-7Gen-4Gb-Ram-500G-Hdd-1Vq14Ea I3', 'pc-portable-hp-pavilion-15-cc001nk-i3-7100u-7gen-4gb-ram-500g-hdd-1vq14ea i3.jpg', 'portable'),
(58, '24Ports Poe', '24ports poe.jpg', 'resaux'),
(59, 'Cisco - Slm2048 - 48-Port Jpg', 'CISCO - SLM2048 - 48-port jpg.jpg', 'resaux'),
(60, 'Cisco 24-Port Unmanaged Rack Switch', 'CISCO 24-port unmanaged Rack Switch.png', 'resaux'),
(61, 'Cisco Sf300-08 8 Port  Small Business Switch S', 'Cisco SF300-08 8 Port  Small Business Switch S.jpg', 'resaux'),
(62, 'Cisco 24Ports', 'cisco_24ports.jpg', 'resaux'),
(63, 'D-Link Go-Sw 5G-Sawitch 5 Ports Gigabit', 'd-link GO-SW_5G-Sawitch 5 ports Gigabit.jpg', 'resaux'),
(64, 'T-Plink 24 Ports', 't-plink 24 ports.jpg', 'cominication'),
(65, 'T-Plink 5Porte', 'T-plink 5porte.jpg', 'resaux'),
(66, 'Tp-Link 48 Port10-100-1000Mbps Gigabit Ethernet Switch', 'TP-LINK 48 PORT10-100-1000Mbps GIGABIT ETHERNET SWITCH.jpg', 'resaux'),
(67, 'Tp-Link 8-Port Desktop', 'TP-Link 8-Port Desktop.webp', 'resaux'),
(68, 'Tplink-Switch-5 Ports', 'Tplink-Switch-5 Ports.jpg', 'resaux'),
(69, 'Ubiquiti Unifi 802.11Ac 3X3 Pro Access Point', 'UBIQUITI UNIFI 802.11AC 3X3 PRO ACCESS POINT.jpg', 'resaux'),
(70, 'Ubiquiti Unifi Wifi 6 Pro Access Point ', 'UBIQUITI UNIFI WIFI 6 PRO ACCESS POINT .png', 'resaux'),
(71, 'Logitech', 'logitech.jpg', 'camera');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2020 at 03:30 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dw17`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `nama_negara` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `nama_negara`, `createdAt`, `updatedAt`) VALUES
(1, 'Australia', '2020-08-02 00:00:00', '2020-08-18 04:31:13'),
(2, 'Tokyo', '2020-08-02 00:00:00', '2020-08-02 00:00:00'),
(3, 'Indonesia', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'South Korea', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'baruuuu', '2020-09-05 03:19:54', '2020-09-05 03:19:54');

-- --------------------------------------------------------

--
-- Table structure for table `imagetrips`
--

CREATE TABLE `imagetrips` (
  `id` int(11) NOT NULL,
  `gambar1` varchar(255) DEFAULT NULL,
  `gambar2` varchar(255) DEFAULT NULL,
  `gambar3` varchar(255) DEFAULT NULL,
  `gambar4` varchar(255) DEFAULT NULL,
  `trip_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagetrips`
--

INSERT INTO `imagetrips` (`id`, `gambar1`, `gambar2`, `gambar3`, `gambar4`, `trip_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1561198789-add490cf55a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80', 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1561198789-add490cf55a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80', 7, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `profileimages`
--

CREATE TABLE `profileimages` (
  `id` int(11) NOT NULL,
  `gambar1` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200814062338-create-user.js'),
('20200816161442-create-country.js'),
('20200816161512-create-trip.js'),
('20200817021207-create-transaction.js'),
('20200820044207-create-image-trip.js'),
('20200820044442-create-profile-image.js'),
('20200820062357-sebelumhistory.js'),
('20200820121445-add-column-to-trip.js'),
('20200820184221-add-userid-model-transaction.js'),
('20200825063512-create-traveler.js'),
('20200825063532-create-journey.js'),
('20200825063538-create-user-journey.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `counterQty` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `tripId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `counterQty`, `total`, `status`, `attachment`, `tripId`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 1, 1000000, 'Approved', 'transaksi_1_pengguna_21.JPG', 7, '0000-00-00 00:00:00', '2020-09-06 15:36:33', 21),
(3, 1, 2500000, 'Waiting Approval', '', 1, '2020-08-21 02:07:27', '2020-08-24 09:48:58', 21),
(4, 3, 7500000, 'Canceled', '', 1, '2020-08-21 02:07:56', '2020-09-08 13:27:30', 31),
(42, 4, 10000000, 'Waiting Approval', '', 1, '2020-08-21 10:10:20', '2020-08-24 07:13:49', 21),
(46, 2, 5000000, 'Waiting Approval', '', 1, '2020-08-21 23:37:35', '2020-08-24 12:17:46', 21),
(47, 10, 25000000, 'Waiting Approval', '', 1, '2020-08-21 23:38:00', '2020-08-24 09:55:30', 21),
(48, 5, 12500000, 'Waiting Approval', 'transaksi_48_pengguna_21.JPG', 1, '2020-08-22 01:31:15', '2020-09-06 10:02:29', 21),
(49, 12, 30000000, 'Waiting Approval', 'transaksi_49_pengguna_21.JPG', 1, '2020-08-22 05:14:10', '2020-09-06 10:00:19', 21),
(50, 13, 32500000, 'Waiting Approval', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg', 1, '2020-08-22 05:35:19', '2020-09-06 03:58:17', 21),
(51, 1, 2500000, 'Waiting Approval', 'transaksi_51_pengguna_21.JPG', 1, '2020-08-24 12:20:15', '2020-09-06 09:39:20', 21),
(52, 3, 7500000, 'Waiting Approval', 'transaksi_52_pengguna_21.JPG', 10, '2020-09-06 10:10:35', '2020-09-06 15:34:57', 21),
(53, 2, 20000000, 'Waiting Payment', '', 27, '2020-09-08 13:00:51', '2020-09-08 13:00:51', 21),
(54, 3, 30000000, 'Waiting Payment', '', 27, '2020-09-08 13:02:26', '2020-09-08 13:02:26', 21),
(55, 10, 100000000, 'Canceled', 'transaksi_55_pengguna_21.JPG', 27, '2020-09-08 13:14:02', '2020-09-08 13:27:23', 21);

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `accomodation` varchar(255) DEFAULT NULL,
  `transportation` varchar(255) DEFAULT NULL,
  `eat` varchar(255) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  `night` int(11) DEFAULT NULL,
  `date_trip` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quota` int(11) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `image_trip_1` varchar(255) DEFAULT NULL,
  `image_trip_2` varchar(255) DEFAULT NULL,
  `image_trip_3` varchar(255) NOT NULL,
  `image_trip_4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trips`
--

INSERT INTO `trips` (`id`, `title`, `accomodation`, `transportation`, `eat`, `day`, `night`, `date_trip`, `price`, `quota`, `description`, `image`, `country_id`, `createdAt`, `updatedAt`, `user_id`, `image_trip_1`, `image_trip_2`, `image_trip_3`, `image_trip_4`) VALUES
(1, '6D/4N Fun Tassie Vacation + Sydney', 'Hotel 4 Hari', 'Qatar Airways', 'Included as ltinerary', 6, 4, '2020-08-26', 2500000, 6, 'Sydney, city, capital of the state of New South Wales, Australia. Located on Australia\'s southeastern coast, Sydney is the country\'s largest city and, with its magnificent harbour and strategic position, is one of the most important ports in the South Pacific.', 'https://i.ibb.co/0M9Wbyf/Aust-Thmb-1.png', 1, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 21, 'https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1561198789-add490cf55a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'),
(7, '8D/6N Wonderful Autum Tokyo', 'Hotel 6 Malam', 'Air Asia', 'Included as ltinerary', 8, 6, '2020-08-29', 5000000, 2, 'Tokyo is Japan\'s capital and the world\'s most populous metropolis. It is also one of Japan\'s 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.', 'https://i.ibb.co/yRPs8Gp/Japa-Thmb-1.png', 2, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 22, 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=771&q=80', 'https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80', 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80', 'https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'),
(8, '4D/3N Overland Jakarta Beauty', 'Hotel 3 Malam', 'Garuda Indonesia', 'Included as ltinerary', 4, 3, '2020-08-26', 2000000, 2, 'akarta is the capital city of the Republic of Indonesia. As the capital city, Jakarta is a melting pot of various ethnic groups\' representatives, such as Javanese, Sundanese, Bugis, Minang, Chinese, Arab and many more. Jakarta has an estimated population of 10,075,310 (2014) with population density 4,383.53 / km2.', 'https://i.ibb.co/wyypGBy/Indo-Thmb-1.png', 3, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 21, NULL, NULL, '', ''),
(9, '6D/4N Exciting Summer in Korea', 'Hotel 4 Malam', 'Air Asia', 'Included as ltinerary', 6, 4, '2020-08-26', 4000000, 2, 'outh Korea is a country in Eastern Asia occupying the southern half of the Korean Peninsula. It borders the Sea of Japan, the Yellow Sea, and North Korea. South Korea\'s terrain is mostly mountainous.', 'https://i.ibb.co/0K8xNwm/SKor-Thmb-1.png', 4, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 21, NULL, NULL, '', ''),
(10, '7D/6N Vacation in Malaysia', 'Hotel 4 Hari', 'Qatar Airways', 'Included as ltinerary', 6, 4, '2020-08-26', 2500000, 6, 'Malaysia, country of Southeast Asia, lying just north of the Equator, that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat), which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo.', 'https://i.ibb.co/yRPs8Gp/Japa-Thmb-1.png', 1, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 21, NULL, NULL, '', ''),
(11, '7D/6N Thailand Holiday', 'Hotel 4 Hari', 'Qatar Airways', 'Included as ltinerary', 6, 4, '2020-08-26', 2500000, 6, 'Thailand is in the heart of Southeast Asia. Cambodia and Laos border the country to the east and northeast, and Myanmar lies to the northwest. To the west is the Andaman Sea and the Gulf of Thailand, southeast of Burma. The long southern region, connecting with Malaysia, is hilly and forested.', 'https://i.ibb.co/yRPs8Gp/Japa-Thmb-1.png', 1, '0000-00-00 00:00:00', '2020-08-17 05:49:04', 21, NULL, NULL, '', ''),
(21, 'Perjalanan Dahsyat ke Bali', '4 Hari 3 Malam', 'Pesawat', 'Lengkap', 4, 3, '2020-01-15', 1500000, 1, 'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers\' paradise!', 'https://i.ibb.co/0K8xNwm/SKor-Thmb-1.png', 4, '2020-08-18 22:56:23', '2020-08-18 22:56:23', 21, NULL, NULL, '', ''),
(26, 'abc di sebuah asd', '4 Hari 3 Malam', 'Air Asia', 'Lengkap', 4, 3, '2020-09-23', 1500000, 11, 'pasti menyenangkan', 'http://source.unsplash.com/random', 1, '2020-09-05 14:33:02', '2020-09-05 14:33:02', NULL, NULL, NULL, '', ''),
(27, 'Trip To Korea', 'Hotel 4 Nights', 'Air Asia', 'Full Course', 4, 3, '2020-09-08', 10000000, 10, 'pasti menyenangkan', 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80', 4, '2020-09-07 01:18:39', '2020-09-07 01:18:39', NULL, NULL, 'https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80', 'https://images.unsplash.com/photo-1562680829-7927493f7a50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `admin` tinyint(1) DEFAULT '0',
  `picture` varchar(255) NOT NULL DEFAULT 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `phone`, `address`, `createdAt`, `updatedAt`, `admin`, `picture`) VALUES
(21, 'example', 'example@gmail.com', '$2b$10$H76iEKql6XQ4TvEvFiXhcehSJfGHakhuVq8/eLFH/toCl1BhelPs.', '021', 'address', '2020-08-16 09:21:27', '2020-09-08 09:53:15', 0, 'profile_21.JPG'),
(22, 'example2', 'example2@gmail.com', '$2b$10$H76iEKql6XQ4TvEvFiXhcehSJfGHakhuVq8/eLFH/toCl1BhelPs.', '021', 'address', '2020-08-16 09:21:27', '2020-08-16 09:21:27', 1, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(23, 'yuhuuu', 'yuhuuu@gmail.com', '$2b$10$AFWWSSikQGDBqNtIIRYf8u2UZb1noH2.J0UJ.cc/z0mTGMBVoZ4SO', '021', 'address', '2020-08-18 03:06:02', '2020-08-18 03:06:02', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(24, 'xa', 'xa@gmail.com', '$2b$10$idM1MjcPM/zddWQBezROvur7WjxVTEqHAOOrgrWevRw1yHgF3DRQu', '021', 'address', '2020-08-18 03:07:13', '2020-08-18 03:07:13', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(28, 'Freddy Ajax Pratama', 'freddy.ajax@gmail.com', '$2b$10$QU0Z9i0wgHl8Mn.9FEloCO4mJCpVslakbpnfT5FZM2LVDfn2Zeprm', '089123123', 'gedung putih washington DC', '2020-08-19 01:58:04', '2020-08-19 01:58:04', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(30, 'asd', 'asdasd@gmail.com', '$2b$10$x2mlCLgqNO8vlDN7MA.AyuHiyrhpz.aEr04x6n9cuPkzAUwrjPx/G', '', '', '2020-08-22 01:37:48', '2020-08-22 01:37:48', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(31, 'Dwayne Johnson', 'dj@gmail.com', '$2b$10$cqrmpZEyerB/PIn1rebDpO2FFsNb19xZT/Su8e4BfI35mX6oBh4dy', '', '', '2020-08-22 01:38:48', '2020-08-22 01:38:48', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(32, 'John doe', 'johndoe@fakemail.com', '$2b$10$KwgxFS3HwGuN2XM5rjglb.Ye/8qCPPHUiD3XaOFnXOcGgY/2bewVy', '0211092831023', 'Jalan Sesuatu', '2020-08-22 04:54:37', '2020-08-22 04:54:37', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(33, 'Scarlet J', 'SC@gmail.com', '$2b$10$WW3Hsgl.wLhM.kW3dvpljuowvzttPSwj0dxEr5lwJY04vHQ1yhDDS', '02101202193', 'taman bunga', '2020-08-22 05:33:39', '2020-08-22 05:33:39', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(34, 'siapa saya', 'siapayaa@gmail.com', '$2b$10$Khmcx8TnE4R.itLE6lHukeTBJhMzUvSri1T1JnCsGcsF7239/fRIu', '', '', '2020-08-23 05:30:43', '2020-08-23 05:30:43', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(35, 'sesuatu@gmail.com', 'sesuatu@gmail.com', '$2b$10$.qoycxhMMbnZL6xQc/GenOpzwGa9PirDzE9mqAmYFla9Blj/GSL8y', '', '', '2020-08-23 05:40:45', '2020-08-23 05:40:45', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(36, '', 'coba@gmail.com', '$2b$10$NhQXyV/FFc/5EgTUKfno7OPsIT.46t/qHQP0Cf4ZOWKXZRW3aZ656', '', '', '2020-08-24 05:18:48', '2020-08-24 05:18:48', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'),
(37, 'xaasd', 'xasda@gmail.com', '$2b$10$R6scJaZCRUECJOvydtVc7.qcPzt.6xiIlhQ8eEmWovvtfwnzfObw.', '021', 'address', '2020-09-05 03:03:03', '2020-09-05 03:03:03', 0, 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imagetrips`
--
ALTER TABLE `imagetrips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trip_id` (`trip_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `profileimages`
--
ALTER TABLE `profileimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tripId` (`tripId`),
  ADD KEY `users_ibfk_1` (`userId`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`),
  ADD KEY `Trips_user_id_foreign_idx` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `imagetrips`
--
ALTER TABLE `imagetrips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `profileimages`
--
ALTER TABLE `profileimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `imagetrips`
--
ALTER TABLE `imagetrips`
  ADD CONSTRAINT `imagetrips_ibfk_1` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `imagetrips_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profileimages`
--
ALTER TABLE `profileimages`
  ADD CONSTRAINT `profileimages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`tripId`) REFERENCES `trips` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trips`
--
ALTER TABLE `trips`
  ADD CONSTRAINT `Trips_user_id_foreign_idx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

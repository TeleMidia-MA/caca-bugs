-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2016 at 02:27 
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `caca_bugs`
--

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `id_user` int(200) NOT NULL,
  `sendDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isRight` tinyint(1) NOT NULL DEFAULT '0',
  `question` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `id_user`, `sendDate`, `isRight`, `question`) VALUES
(2, 1, '2016-11-11 10:15:43', 1, 1),
(3, 1, '2016-11-11 10:16:45', 0, 4),
(4, 1, '2016-11-11 10:19:09', 1, 1),
(5, 1, '2016-11-11 10:19:35', 0, 0),
(6, 3, '2016-11-11 10:20:31', 1, 0),
(7, 3, '2016-11-11 10:20:38', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `nome` varchar(300) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `question` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `nome`, `senha`, `question`) VALUES
(1, 'mendes', 'paulo', '8dc05a2dd9ab9c89fdd980fcea730391', 4),
(3, 'csalles', 'Carlos de Salles', '419789426eeccf07e77dae48ce291063', 2),
(4, 'pedropva', 'pedro', 'a6c4fc689f874ebf8c957113b1266e22', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 04:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

CREATE DATABASE IF NOT EXISTS lizenzen;
USE lizenzen;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `lizenzen` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discord_link` varchar(255) DEFAULT NULL,
  `lizenzName` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for table `lizenzen`
--
ALTER TABLE `lizenzen`
  ADD PRIMARY KEY (`id`);


--
-- AUTO_INCREMENT for table `lizenzen`
--
ALTER TABLE `lizenzen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

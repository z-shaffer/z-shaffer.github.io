DROP TABLE IF EXISTS `tbl_image`;
CREATE TABLE IF NOT EXISTS `tbl_image` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE latin1_bin NOT NULL,
  `image_path` text COLLATE latin1_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Dumping data for table `tbl_image`
--

INSERT INTO `tbl_image` (`id`, `name`, `image_path`) VALUES
(1, 'handbag.jpeg', 'gallery/handbag.jpeg'),
(2, 'watch.jpeg', 'gallery/watch.jpeg'),
(3, 'Trendy Watch', 'gallery/trendy-watch.jpeg'),
(4, 'Travel Bag', 'gallery/travel-bag.jpeg'),
(5, 'ducklings.jpeg', 'gallery/ducklings.jpeg'),
(6, 'wooden-dolls.jpeg', 'gallery/wooden-dolls.jpeg'),
(7, 'camera.jpeg', 'gallery/camera.jpeg'),
(8, 'perls.jpeg', 'gallery/perls.jpeg');
COMMIT;

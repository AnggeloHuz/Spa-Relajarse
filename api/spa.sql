-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-06-2023 a las 00:04:36
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spa`
--
CREATE DATABASE IF NOT EXISTS `spa` DEFAULT CHARACTER SET utf32 COLLATE utf32_spanish_ci;
USE `spa`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estaciones`
--

DROP TABLE IF EXISTS `estaciones`;
CREATE TABLE `estaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `estaciones`
--

INSERT INTO `estaciones` (`id`, `nombre`, `descripcion`) VALUES
(6, 'Masajes y Descanso', 'Esta estación de nuestro SPA esta diseñada para la atención de masajes para las articulaciones y que nos permita descansar tranquilos.'),
(7, 'Sauna y Purificación', 'Esta estación busca limpiar las impurezas del cuerpo con un sauna relajante, y permitiendo a los usuarios tener acceso a servicios de purifica facial y corporal.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

DROP TABLE IF EXISTS `horarios`;
CREATE TABLE `horarios` (
  `id` int(11) NOT NULL,
  `dia` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `inicio_mañana` varchar(60) COLLATE utf32_spanish_ci DEFAULT NULL,
  `fin_mañana` varchar(60) COLLATE utf32_spanish_ci DEFAULT NULL,
  `inicio_tarde` varchar(60) COLLATE utf32_spanish_ci DEFAULT NULL,
  `fin_tarde` varchar(60) COLLATE utf32_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id`, `dia`, `inicio_mañana`, `fin_mañana`, `inicio_tarde`, `fin_tarde`) VALUES
(1, 'Lunes a Viernes', '08:00 am', '12:00 m', '01:00 pm', '05:00pm'),
(2, 'Sabado', '08:00 am', '12:00 m', '01:00 pm', '09:00pm'),
(4, 'Domingo', '13:23', '21:31', '13:03', '12:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `categoria` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf32_spanish_ci NOT NULL,
  `precio` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `imagen` varchar(1000) COLLATE utf32_spanish_ci NOT NULL,
  `link` varchar(1000) COLLATE utf32_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria`, `descripcion`, `precio`, `imagen`, `link`) VALUES
(1, 'ejemplo', 'Cremas', 'hidratador de piel', '$15', 'https://www.cerave.es/-/media/Project/Loreal/BrandSites/CeraVe/Master/Spain/Product/Moisturizers/CeraVe_MoisturizingLotion_NEW_v021.png?h=625&la=es-ES&w=625', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

DROP TABLE IF EXISTS `recetas`;
CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `ingredientes` text COLLATE utf32_spanish_ci NOT NULL,
  `pasos` text COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `nombre`, `ingredientes`, `pasos`) VALUES
(2, 'Panqueques', 'harina, agua', 'cocinar la harina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `apellido` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `email` varchar(200) COLLATE utf32_spanish_ci NOT NULL,
  `telefono` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `estacion` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `servicio` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `genero` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `fecha` varchar(100) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `nombre`, `apellido`, `email`, `telefono`, `estacion`, `servicio`, `genero`, `fecha`) VALUES
(7, 'Alexander', 'Pernia', 'huzanggelo0904@gmail.com', '0412-0686329', 'Yoga', 'Masaje', 'Hombre', '2023-12-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñas`
--

DROP TABLE IF EXISTS `reseñas`;
CREATE TABLE `reseñas` (
  `id` int(11) NOT NULL,
  `comentario` text COLLATE utf32_spanish_ci NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `calificacion` set('0','1','2','3','4','5') COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `reseñas`
--

INSERT INTO `reseñas` (`id`, `comentario`, `nombre`, `calificacion`) VALUES
(3, 'Un gran sitio de salud', 'Anggelo', '5'),
(4, 'No me gusto', 'Anggelo', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud`
--

DROP TABLE IF EXISTS `salud`;
CREATE TABLE `salud` (
  `id` int(11) NOT NULL,
  `titulo` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `referencia` varchar(1000) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf32_spanish_ci NOT NULL,
  `imagen` varchar(1000) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `salud`
--

INSERT INTO `salud` (`id`, `titulo`, `referencia`, `descripcion`, `imagen`) VALUES
(1, 'La salud es la clave de la belleza', 'https://es.wikipedia.org/wiki/Salud', 'Ejemplo de texto de la descripcion', 'https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

DROP TABLE IF EXISTS `servicios`;
CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `categoria` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf32_spanish_ci NOT NULL,
  `precio` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `imagen` varchar(1000) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `nombre`, `categoria`, `descripcion`, `precio`, `imagen`) VALUES
(3, 'Masaje Confortable', 'Muscular', 'masaje en la espalda', '$20', 'https://st.depositphotos.com/1017986/1974/i/600/depositphotos_19747021-stock-photo-beautiful-woman-in-massage-salon.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(60) COLLATE utf32_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `rol` varchar(60) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `rol`) VALUES
(1, 'root', '$2b$10$floirAdqbeZg2k64FJh/Tut4/JbMGHiqq68Sj3gZyHS.tdjUEPusK', 'root');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estaciones`
--
ALTER TABLE `estaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nombre` (`nombre`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reserva_estacion` (`estacion`),
  ADD KEY `reserva_servicio` (`servicio`);

--
-- Indices de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salud`
--
ALTER TABLE `salud`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nombre` (`nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estaciones`
--
ALTER TABLE `estaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `salud`
--
ALTER TABLE `salud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

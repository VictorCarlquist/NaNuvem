-- MySQL dump 10.15  Distrib 10.0.15-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: na_nuvem
-- ------------------------------------------------------
-- Server version	10.0.15-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acoes`
--

DROP TABLE IF EXISTS `acoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acoes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_acao` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `codigo_acao_UNIQUE` (`codigo`),
  UNIQUE KEY `nome_acao_UNIQUE` (`nome_acao`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acoes`
--

LOCK TABLES `acoes` WRITE;
/*!40000 ALTER TABLE `acoes` DISABLE KEYS */;
INSERT INTO `acoes` VALUES (5,'1 Ano de Uso'),(6,'2 Anos de Uso'),(4,'Curtir no Google Mais'),(2,'Curtir Pagina no Facebook'),(1,'Enviar Emails'),(3,'Retwittar');
/*!40000 ALTER TABLE `acoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `arquivos`
--

DROP TABLE IF EXISTS `arquivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `arquivos` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_diretorio` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `extensao` varchar(10) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_arquivos_diretorio1_idx` (`codigo_diretorio`),
  CONSTRAINT `fk_arquivos_diretorio1` FOREIGN KEY (`codigo_diretorio`) REFERENCES `diretorios` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arquivos`
--

LOCK TABLES `arquivos` WRITE;
/*!40000 ALTER TABLE `arquivos` DISABLE KEYS */;
INSERT INTO `arquivos` VALUES (1,1,'arquivo 01','txt'),(2,1,'arquivo 02','txt'),(3,2,'arquivo 03','txt'),(4,2,'arquivo 04','txt'),(5,3,'arquivo 05','txt'),(6,3,'arquivo 06','txt'),(7,4,'arquivo 07','txt'),(8,4,'arquivo 08','txt'),(9,5,'arquivo 09','txt'),(10,5,'arquivo 10','txt'),(11,6,'arquivo 01','txt'),(12,6,'arquivo 02','txt'),(13,7,'arquivo 03','txt'),(14,7,'arquivo 04','txt'),(15,8,'arquivo 05','txt'),(16,8,'arquivo 06','txt'),(17,9,'arquivo 07','txt'),(18,9,'arquivo 08','txt'),(19,10,'arquivo 09','txt'),(20,10,'arquivo 10','txt'),(21,11,'arquivo 01','txt'),(22,11,'arquivo 02','txt'),(23,12,'arquivo 03','txt'),(24,12,'arquivo 04','txt'),(25,13,'arquivo 05','txt'),(26,13,'arquivo 06','txt'),(27,14,'arquivo 07','txt'),(28,14,'arquivo 08','txt'),(29,15,'arquivo 09','txt'),(30,15,'arquivo 10','txt');
/*!40000 ALTER TABLE `arquivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assinaturas`
--

DROP TABLE IF EXISTS `assinaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assinaturas` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_cliente` int(11) NOT NULL,
  `codigo_periodo` int(11) NOT NULL,
  `data_hora` datetime NOT NULL,
  `dias` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_clientes_has_planos_clientes1_idx` (`codigo_cliente`),
  KEY `fk_assinaturas_periodos1_idx` (`codigo_periodo`),
  CONSTRAINT `fk_assinaturas_periodos1` FOREIGN KEY (`codigo_periodo`) REFERENCES `periodos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_planos_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assinaturas`
--

LOCK TABLES `assinaturas` WRITE;
/*!40000 ALTER TABLE `assinaturas` DISABLE KEYS */;
INSERT INTO `assinaturas` VALUES (1,1,1,'2014-10-01 00:00:00',360),(2,1,2,'2014-09-02 00:00:00',180),(3,2,1,'2014-08-03 00:00:00',90),(4,2,3,'2014-07-04 00:00:00',360),(5,3,3,'2014-06-05 00:00:00',180),(6,3,2,'2014-05-06 00:00:00',90),(7,4,1,'2014-04-07 00:00:00',360),(8,4,4,'2014-03-08 00:00:00',160),(9,5,4,'2014-02-09 00:00:00',90),(10,5,4,'2014-01-10 00:00:00',360);
/*!40000 ALTER TABLE `assinaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auditorias`
--

DROP TABLE IF EXISTS `auditorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auditorias` (
  `funcao_codigo` int(11) NOT NULL,
  `usuario_codigo` int(11) NOT NULL,
  `data_hora` datetime NOT NULL,
  PRIMARY KEY (`funcao_codigo`,`usuario_codigo`),
  KEY `fk_funcao_has_usuario_usuario1_idx` (`usuario_codigo`),
  KEY `fk_funcao_has_usuario_funcao1_idx` (`funcao_codigo`),
  CONSTRAINT `fk_funcao_has_usuario_funcao1` FOREIGN KEY (`funcao_codigo`) REFERENCES `funcoes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_usuario_usuario1` FOREIGN KEY (`usuario_codigo`) REFERENCES `usuarios` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditorias`
--

LOCK TABLES `auditorias` WRITE;
/*!40000 ALTER TABLE `auditorias` DISABLE KEYS */;
INSERT INTO `auditorias` VALUES (1,1,'2013-12-31 21:49:59'),(2,2,'0000-00-00 00:00:00'),(3,2,'2013-10-30 23:09:59'),(4,3,'2014-10-30 21:10:59'),(5,3,'2014-10-30 03:59:59'),(6,4,'2014-10-20 23:00:15'),(7,5,'2014-10-20 23:35:59');
/*!40000 ALTER TABLE `auditorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bonus`
--

DROP TABLE IF EXISTS `bonus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bonus` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` text,
  `quantidade_espaco` bigint(20) NOT NULL,
  `imagem` text,
  `codigo_acao` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_bonus_acoes1_idx` (`codigo_acao`),
  CONSTRAINT `fk_bonus_acoes1` FOREIGN KEY (`codigo_acao`) REFERENCES `acoes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus`
--

LOCK TABLES `bonus` WRITE;
/*!40000 ALTER TABLE `bonus` DISABLE KEYS */;
INSERT INTO `bonus` VALUES (1,'Light',50,1),(2,'Medium',75,2),(3,'Mega',100,3),(4,'Ultra',500,4),(5,'Power',750,5),(6,'Supimpa',1000,6);
/*!40000 ALTER TABLE `bonus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bonus_clientes`
--

DROP TABLE IF EXISTS `bonus_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bonus_clientes` (
  `codigo_bonus` int(11) NOT NULL,
  `codigo_cliente` int(11) NOT NULL,
  `data_hora` datetime NOT NULL,
  PRIMARY KEY (`codigo_bonus`,`codigo_cliente`),
  KEY `fk_bonus_has_clientes_clientes1_idx` (`codigo_cliente`),
  KEY `fk_bonus_has_clientes_bonus1_idx` (`codigo_bonus`),
  CONSTRAINT `fk_bonus_has_clientes_bonus1` FOREIGN KEY (`codigo_bonus`) REFERENCES `bonus` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bonus_has_clientes_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus_clientes`
--

LOCK TABLES `bonus_clientes` WRITE;
/*!40000 ALTER TABLE `bonus_clientes` DISABLE KEYS */;
INSERT INTO `bonus_clientes` VALUES (1,1,'2014-11-19 00:00:00'),(1,2,'2014-11-19 00:00:00'),(1,3,'2014-11-19 00:00:00'),(1,4,'2014-11-19 00:00:00'),(1,5,'2014-11-19 00:00:00'),(1,6,'2014-11-19 00:00:00'),(1,7,'2014-11-19 00:00:00'),(1,8,'2014-11-19 00:00:00'),(1,9,'2014-11-19 00:00:00'),(1,10,'2014-11-19 00:00:00'),(2,1,'2014-11-18 00:00:00'),(2,2,'2014-11-18 00:00:00'),(2,3,'2014-11-18 00:00:00'),(2,4,'2014-11-18 00:00:00'),(2,5,'2014-11-18 00:00:00'),(2,6,'2014-11-18 00:00:00'),(2,7,'2014-11-18 00:00:00'),(2,8,'2014-11-18 00:00:00'),(2,9,'2014-11-18 00:00:00'),(2,10,'2014-11-18 00:00:00'),(3,1,'2014-11-17 00:00:00'),(3,2,'2014-11-17 00:00:00'),(3,3,'2014-11-17 00:00:00'),(3,4,'2014-11-17 00:00:00'),(3,5,'2014-11-17 00:00:00'),(3,6,'2014-11-17 00:00:00'),(3,7,'2014-11-17 00:00:00'),(3,8,'2014-11-17 00:00:00'),(3,9,'2014-11-17 00:00:00'),(3,10,'2014-11-17 00:00:00'),(4,1,'2014-11-16 00:00:00'),(4,2,'2014-11-16 00:00:00'),(4,3,'2014-11-16 00:00:00'),(4,4,'2014-11-16 00:00:00'),(4,5,'2014-11-16 00:00:00'),(4,6,'2014-11-16 00:00:00'),(4,7,'2014-11-16 00:00:00'),(4,8,'2014-11-16 00:00:00'),(4,9,'2014-11-16 00:00:00'),(4,10,'2014-11-16 00:00:00'),(5,1,'2014-11-15 00:00:00'),(5,2,'2014-11-15 00:00:00'),(5,3,'2014-11-15 00:00:00'),(5,4,'2014-11-15 00:00:00'),(5,5,'2014-11-15 00:00:00'),(5,6,'2014-11-15 00:00:00'),(5,7,'2014-11-15 00:00:00'),(5,8,'2014-11-15 00:00:00'),(5,9,'2014-11-15 00:00:00'),(5,10,'2014-11-15 00:00:00'),(6,1,'2014-11-14 00:00:00'),(6,2,'2014-11-14 00:00:00'),(6,3,'2014-11-14 00:00:00'),(6,4,'2014-11-14 00:00:00'),(6,5,'2014-11-14 00:00:00'),(6,6,'2014-11-14 00:00:00'),(6,7,'2014-11-14 00:00:00'),(6,8,'2014-11-14 00:00:00'),(6,9,'2014-11-14 00:00:00'),(6,10,'2014-11-14 00:00:00');
/*!40000 ALTER TABLE `bonus_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(12) NOT NULL,
  `espaco_total` bigint(20) NOT NULL,
  `espaco_utilizado` bigint(20) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Maria','maria@gmail.com','123',100,50),(2,'João','joao@gmail.com','123',100,50),(3,'José','jose@gmail.com','123',100,50),(4,'Victor','vitinho@gmail.com','123',100,50),(5,'Natã','natanzinho@gmail.com','123',100,50),(6,'Iago','iaguinho@gmail.com','123',100,50),(7,'Felipe','felipinho@gmail.com','123',100,50),(8,'Fernanda','fernandinha@gmail.com','123',100,50),(9,'Suse','susaninha@gmail.com','123',100,50),(10,'Bruno','bruninho@gmail.com','123',100,50);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_versao` int(11) NOT NULL,
  `texto` text NOT NULL,
  `data_hora` datetime NOT NULL,
  `codigo_cliente` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_comentarios_versoes1_idx` (`codigo_versao`),
  KEY `fk_comentarios_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_comentarios_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentarios_versoes1` FOREIGN KEY (`codigo_versao`) REFERENCES `versoes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,'Comentário 01','2014-11-20 00:00:00',1),(2,2,'Comentário 01','2014-11-20 00:00:00',1),(3,3,'Comentário 01','2014-11-20 00:00:00',2),(4,4,'Comentário 01','2014-11-20 00:00:00',2),(5,5,'Comentário 01','2014-11-20 00:00:00',3),(6,6,'Comentário 01','2014-11-20 00:00:00',3),(7,7,'Comentário 01','2014-11-20 00:00:00',3),(8,8,'Comentário 01','2014-11-20 00:00:00',4),(9,9,'Comentário 01','2014-11-20 00:00:00',5),(10,10,'Comentário 01','2014-11-20 00:00:00',6);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compartilhamento_arquivo`
--

DROP TABLE IF EXISTS `compartilhamento_arquivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compartilhamento_arquivo` (
  `codigo_cliente` int(11) NOT NULL,
  `codigo_arquivo` int(11) NOT NULL,
  `permissao` tinyint(4) NOT NULL,
  PRIMARY KEY (`codigo_cliente`,`codigo_arquivo`),
  KEY `fk_clientes_has_arquivos_arquivos1_idx` (`codigo_arquivo`),
  KEY `fk_clientes_has_arquivos_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_clientes_has_arquivos_arquivos1` FOREIGN KEY (`codigo_arquivo`) REFERENCES `arquivos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_arquivos_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compartilhamento_arquivo`
--

LOCK TABLES `compartilhamento_arquivo` WRITE;
/*!40000 ALTER TABLE `compartilhamento_arquivo` DISABLE KEYS */;
INSERT INTO `compartilhamento_arquivo` VALUES (1,1,0),(2,10,1),(3,15,2),(4,20,0),(5,25,1),(6,30,2),(7,4,0),(8,5,1),(9,6,2),(10,7,0);
/*!40000 ALTER TABLE `compartilhamento_arquivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compartilhamento_diretorio`
--

DROP TABLE IF EXISTS `compartilhamento_diretorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compartilhamento_diretorio` (
  `codigo_cliente` int(11) NOT NULL,
  `codigo_diretorio` int(11) NOT NULL,
  `permissao` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`codigo_cliente`,`codigo_diretorio`),
  KEY `fk_clientes_has_diretorio_diretorio1_idx` (`codigo_diretorio`),
  KEY `fk_clientes_has_diretorio_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_clientes_has_diretorio_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_diretorio_diretorio1` FOREIGN KEY (`codigo_diretorio`) REFERENCES `diretorios` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compartilhamento_diretorio`
--

LOCK TABLES `compartilhamento_diretorio` WRITE;
/*!40000 ALTER TABLE `compartilhamento_diretorio` DISABLE KEYS */;
INSERT INTO `compartilhamento_diretorio` VALUES (1,20,0),(1,21,1),(1,22,2),(1,23,0),(1,24,1),(1,25,2),(1,26,0),(1,27,1),(1,28,2),(1,29,0);
/*!40000 ALTER TABLE `compartilhamento_diretorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diretorios`
--

DROP TABLE IF EXISTS `diretorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diretorios` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_cliente` int(11) NOT NULL,
  `diretorio_pai` int(11) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_diretorio_diretorio1_idx` (`diretorio_pai`),
  KEY `fk_diretorio_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_diretorio_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_diretorio_diretorio1` FOREIGN KEY (`diretorio_pai`) REFERENCES `diretorios` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diretorios`
--

LOCK TABLES `diretorios` WRITE;
/*!40000 ALTER TABLE `diretorios` DISABLE KEYS */;
INSERT INTO `diretorios` VALUES (1,1,NULL,'/'),(2,1,1,'Arquivos'),(3,1,1,'Vídeos'),(4,1,1,'Imagens'),(5,1,1,'Músicas'),(6,1,2,'Filmes'),(7,1,2,'Pasta1'),(8,1,2,'Pasta2'),(9,1,7,'A_Pasta_1'),(10,2,NULL,'/'),(11,2,6,'Arquivos'),(12,2,6,'Vídeos'),(13,2,6,'Imagens'),(14,2,6,'Músicas'),(15,3,NULL,'/'),(16,3,11,'Arquivos'),(17,3,11,'Vídeos'),(18,3,11,'Imagens'),(19,3,11,'Músicas'),(20,4,NULL,'/'),(21,4,16,'Arquivos'),(22,4,16,'Vídeos'),(23,4,16,'Imagens'),(24,4,16,'Músicas'),(25,5,NULL,'/'),(26,5,21,'Arquivos'),(27,5,21,'Vídeos'),(28,5,21,'Imagens'),(29,5,21,'/Músicas'),(30,6,NULL,'/'),(31,6,26,'Arquivos'),(32,6,26,'Vídeos'),(33,6,26,'Imagens'),(34,6,26,'Músicas'),(35,7,NULL,'/'),(36,7,31,'Arquivos'),(37,7,31,'Vídeos'),(38,7,31,'Imagens'),(39,7,31,'Músicas'),(40,8,NULL,'/'),(41,8,36,'Arquivos'),(42,8,36,'Vídeos'),(43,8,36,'Imagens'),(44,8,36,'Músicas'),(45,9,NULL,'/'),(46,9,41,'Arquivos'),(47,9,41,'Vídeos'),(48,9,41,'Imagens'),(49,9,41,'Músicas'),(50,10,NULL,'/'),(51,10,46,'Arquivos'),(52,10,46,'Vídeos'),(53,10,46,'Imagens'),(54,10,46,'Músicas'),(55,10,50,'Álbum 01'),(56,10,51,'Sub do Álbum 01');
/*!40000 ALTER TABLE `diretorios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcoes`
--

DROP TABLE IF EXISTS `funcoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `funcoes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcoes`
--

LOCK TABLES `funcoes` WRITE;
/*!40000 ALTER TABLE `funcoes` DISABLE KEYS */;
INSERT INTO `funcoes` VALUES (1,'Editar'),(2,'Ler'),(3,'Excluir'),(4,'Deus'),(5,'Configurar'),(6,'Mesclar'),(7,'Induzir'),(8,'Controlar'),(9,'Memorizar'),(10,'Fuçar'),(11,'Presidente'),(12,'Diretor'),(13,'Gerente');
/*!40000 ALTER TABLE `funcoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupos`
--

DROP TABLE IF EXISTS `grupos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupos` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos`
--

LOCK TABLES `grupos` WRITE;
/*!40000 ALTER TABLE `grupos` DISABLE KEYS */;
INSERT INTO `grupos` VALUES (1,'Andorinhas'),(2,'Papagaios'),(3,'Elefantes'),(4,'Micos Leões Dourados'),(5,'Ursos Pandas'),(6,'Pelicanos'),(7,'Loiras'),(8,'Morenas'),(9,'Ruivas'),(10,'Latinas');
/*!40000 ALTER TABLE `grupos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodos`
--

DROP TABLE IF EXISTS `periodos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `periodos` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `desconto` float NOT NULL,
  `quantidade_dias` int(11) NOT NULL,
  `codigo_plano` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_periodos_planos1_idx` (`codigo_plano`),
  CONSTRAINT `fk_periodos_planos1` FOREIGN KEY (`codigo_plano`) REFERENCES `planos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodos`
--

LOCK TABLES `periodos` WRITE;
/*!40000 ALTER TABLE `periodos` DISABLE KEYS */;
INSERT INTO `periodos` VALUES (1,0.05,30,4),(2,0.1,60,3),(3,0.15,90,2),(4,0.2,120,1);
/*!40000 ALTER TABLE `periodos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissoes`
--

DROP TABLE IF EXISTS `permissoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissoes` (
  `funcao_codigo` int(11) NOT NULL,
  `grupo_codigo` int(11) NOT NULL,
  PRIMARY KEY (`funcao_codigo`,`grupo_codigo`),
  KEY `fk_funcao_has_grupo_grupo1_idx` (`grupo_codigo`),
  KEY `fk_funcao_has_grupo_funcao1_idx` (`funcao_codigo`),
  CONSTRAINT `fk_funcao_has_grupo_funcao1` FOREIGN KEY (`funcao_codigo`) REFERENCES `funcoes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_grupo_grupo1` FOREIGN KEY (`grupo_codigo`) REFERENCES `grupos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissoes`
--

LOCK TABLES `permissoes` WRITE;
/*!40000 ALTER TABLE `permissoes` DISABLE KEYS */;
INSERT INTO `permissoes` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `permissoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planos` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `valor` double NOT NULL,
  `espaco` bigint(20) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `imagem` varchar(255) DEFAULT 'null',
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
INSERT INTO `planos` VALUES (1,'Pra quem é mais phoda ainda.',5000,5000,'Master','null'),(2,'Pra quem é phodão.',1000,1000,'Gold','null'),(3,'Pra quem é phoda.',500,500,'Silver','null'),(4,'Pra quem é phodinha.',250,250,'Bronze','null');
/*!40000 ALTER TABLE `planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `palavra` varchar(255) DEFAULT NULL,
  `codigo_cliente` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_tags_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_tags_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'vídeos',1),(2,'pdfs',1),(3,'imagens',1),(4,'docs',1),(5,'vídeos',2),(6,'pdfs',2),(7,'imagens',2),(8,'docs',2),(9,'vídeos',3),(10,'pdfs',3),(11,'imagens',3),(12,'docs',3),(13,'vídeos',4),(14,'pdfs',4),(15,'imagens',4),(16,'docs',4),(17,'vídeos',5),(18,'pdfs',5),(19,'imagens',5),(20,'docs',5),(21,'vídeos',6),(22,'pdfs',6),(23,'imagens',6),(24,'docs',6),(25,'vídeos',7),(26,'pdfs',7),(27,'imagens',7),(28,'docs',7),(29,'vídeos',8),(30,'pdfs',8),(31,'imagens',8),(32,'docs',8),(33,'vídeos',9),(34,'pdfs',9),(35,'imagens',9),(36,'docs',9),(37,'vídeos',10),(38,'pdfs',10),(39,'imagens',10),(40,'docs',10);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags_arquivos`
--

DROP TABLE IF EXISTS `tags_arquivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags_arquivos` (
  `codigo_arquivo` int(11) NOT NULL,
  `codigo_tag` int(11) NOT NULL,
  PRIMARY KEY (`codigo_arquivo`,`codigo_tag`),
  KEY `fk_arquivos_has_tags_tags1_idx` (`codigo_tag`),
  KEY `fk_arquivos_has_tags_arquivos1_idx` (`codigo_arquivo`),
  CONSTRAINT `fk_arquivos_has_tags_arquivos1` FOREIGN KEY (`codigo_arquivo`) REFERENCES `arquivos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_arquivos_has_tags_tags1` FOREIGN KEY (`codigo_tag`) REFERENCES `tags` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags_arquivos`
--

LOCK TABLES `tags_arquivos` WRITE;
/*!40000 ALTER TABLE `tags_arquivos` DISABLE KEYS */;
INSERT INTO `tags_arquivos` VALUES (1,4),(2,4),(3,4),(4,4),(5,4),(6,4),(7,4),(8,4),(9,4),(10,4);
/*!40000 ALTER TABLE `tags_arquivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `grupo_codigo` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_usuario_grupo1_idx` (`grupo_codigo`),
  CONSTRAINT `fk_usuario_grupo1` FOREIGN KEY (`grupo_codigo`) REFERENCES `grupos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Marcelo','marcelo_adm@gmail.com','123',1),(2,'Rodrigo','rodrigo_adm@gmail.com','123',2),(3,'Carlos','carlinho@gmail.com','123',2),(4,'Stefano','tefinho@gmail.com','123',3),(5,'Antonio','toninho@gmail.com','123',3);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `versoes`
--

DROP TABLE IF EXISTS `versoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `versoes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_arquivo` int(11) NOT NULL,
  `situacao` tinyint(4) NOT NULL,
  `data_hora` datetime NOT NULL,
  `tamanho` bigint(20) NOT NULL,
  `codigo_cliente` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_versoes_arquivos_idx` (`codigo_arquivo`),
  KEY `fk_versoes_clientes1_idx` (`codigo_cliente`),
  CONSTRAINT `fk_versoes_arquivos` FOREIGN KEY (`codigo_arquivo`) REFERENCES `arquivos` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_versoes_clientes1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `versoes`
--

LOCK TABLES `versoes` WRITE;
/*!40000 ALTER TABLE `versoes` DISABLE KEYS */;
INSERT INTO `versoes` VALUES (1,1,0,'2015-11-20 00:00:00',1000,1),(2,1,0,'2015-11-20 00:00:00',2000,1),(3,1,0,'2015-11-20 00:00:00',3000,3),(4,1,0,'2015-11-20 00:00:00',4000,3),(5,1,0,'2015-11-20 00:00:00',5000,5),(6,1,0,'2015-11-20 00:00:00',6000,5),(7,1,0,'2015-11-20 00:00:00',7000,7),(8,1,0,'2015-11-20 00:00:00',8000,7),(9,1,0,'2015-11-20 00:00:00',9000,9),(10,1,0,'2015-11-20 00:00:00',10,9),(11,2,0,'2015-11-20 00:00:00',1110,1),(12,3,0,'2015-11-20 00:00:00',2210,1),(13,4,0,'2015-11-20 00:00:00',3310,3),(14,5,0,'2015-11-20 00:00:00',4420,3),(15,6,0,'2015-11-20 00:00:00',5550,5),(16,7,0,'2015-11-20 00:00:00',6670,5),(17,8,0,'2015-11-20 00:00:00',7730,7),(18,9,0,'2015-11-20 00:00:00',8810,7),(19,10,0,'2015-11-20 00:00:00',9920,9),(20,11,0,'2015-11-20 00:00:00',1101,1),(21,12,0,'2015-11-20 00:00:00',2201,1),(22,13,0,'2015-11-20 00:00:00',3301,3),(23,14,0,'2015-11-20 00:00:00',4401,3),(24,15,0,'2015-11-20 00:00:00',5506,5),(25,16,0,'2015-11-20 00:00:00',6607,5),(26,17,0,'2015-11-20 00:00:00',7705,7),(27,18,0,'2015-11-20 00:00:00',8807,7),(28,19,0,'2015-11-20 00:00:00',9900,9),(29,20,0,'2015-11-20 00:00:00',1100,1),(30,21,0,'2015-11-20 00:00:00',2200,1),(31,22,0,'2015-11-20 00:00:00',3300,3),(32,23,0,'2015-11-20 00:00:00',4400,3),(33,24,0,'2015-11-20 00:00:00',5500,5),(34,25,0,'2015-11-20 00:00:00',6600,5),(35,26,0,'2015-11-20 00:00:00',7700,7),(36,27,0,'2015-11-20 00:00:00',8800,7),(37,28,0,'2015-11-20 00:00:00',9900,9),(38,29,0,'2015-11-20 00:00:00',9900,9),(39,30,0,'2015-11-20 00:00:00',9900,9);
/*!40000 ALTER TABLE `versoes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-11 15:02:08

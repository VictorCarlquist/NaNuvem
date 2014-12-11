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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acoes`
--

LOCK TABLES `acoes` WRITE;
/*!40000 ALTER TABLE `acoes` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arquivos`
--

LOCK TABLES `arquivos` WRITE;
/*!40000 ALTER TABLE `arquivos` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assinaturas`
--

LOCK TABLES `assinaturas` WRITE;
/*!40000 ALTER TABLE `assinaturas` DISABLE KEYS */;
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
  `quantidade_espaco` bigint(20) NOT NULL,
  `codigo_acao` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_bonus_acoes1_idx` (`codigo_acao`),
  CONSTRAINT `fk_bonus_acoes1` FOREIGN KEY (`codigo_acao`) REFERENCES `acoes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus`
--

LOCK TABLES `bonus` WRITE;
/*!40000 ALTER TABLE `bonus` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diretorios`
--

LOCK TABLES `diretorios` WRITE;
/*!40000 ALTER TABLE `diretorios` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcoes`
--

LOCK TABLES `funcoes` WRITE;
/*!40000 ALTER TABLE `funcoes` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos`
--

LOCK TABLES `grupos` WRITE;
/*!40000 ALTER TABLE `grupos` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodos`
--

LOCK TABLES `periodos` WRITE;
/*!40000 ALTER TABLE `periodos` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `versoes`
--

LOCK TABLES `versoes` WRITE;
/*!40000 ALTER TABLE `versoes` DISABLE KEYS */;
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

-- Dump completed on 2014-12-10 21:32:59

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema na_nuvem
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema na_nuvem
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `na_nuvem` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `na_nuvem` ;

-- -----------------------------------------------------
-- Table `na_nuvem`.`clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`clientes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`clientes` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(12) NOT NULL,
  `espaco_total` BIGINT NOT NULL,
  `espaco_utilizado` BIGINT NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`diretorios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`diretorios` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`diretorios` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codigo_cliente` INT NOT NULL,
  `diretorio_pai` INT NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_diretorio_diretorio1_idx` (`diretorio_pai` ASC),
  INDEX `fk_diretorio_clientes1_idx` (`codigo_cliente` ASC),
  CONSTRAINT `fk_diretorio_diretorio1`
    FOREIGN KEY (`diretorio_pai`)
    REFERENCES `na_nuvem`.`diretorios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_diretorio_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`arquivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`arquivos` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`arquivos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codigo_diretorio` INT NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `extensao` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_arquivos_diretorio1_idx` (`codigo_diretorio` ASC),
  CONSTRAINT `fk_arquivos_diretorio1`
    FOREIGN KEY (`codigo_diretorio`)
    REFERENCES `na_nuvem`.`diretorios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`versoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`versoes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`versoes` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codigo_arquivo` INT NOT NULL,
  `situacao` TINYINT NOT NULL,
  `data_hora` DATETIME NOT NULL,
  `tamanho` BIGINT NOT NULL,
  `codigo_cliente` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_versoes_arquivos_idx` (`codigo_arquivo` ASC),
  INDEX `fk_versoes_clientes1_idx` (`codigo_cliente` ASC),
  CONSTRAINT `fk_versoes_arquivos`
    FOREIGN KEY (`codigo_arquivo`)
    REFERENCES `na_nuvem`.`arquivos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_versoes_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`comentarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`comentarios` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`comentarios` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codigo_versao` INT NOT NULL,
  `texto` TEXT NOT NULL,
  `data_hora` DATETIME NOT NULL,
  `codigo_cliente` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_comentarios_versoes1_idx` (`codigo_versao` ASC),
  INDEX `fk_comentarios_clientes1_idx` (`codigo_cliente` ASC),
  CONSTRAINT `fk_comentarios_versoes1`
    FOREIGN KEY (`codigo_versao`)
    REFERENCES `na_nuvem`.`versoes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentarios_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`planos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`planos` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`planos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `descricao` TEXT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `espaco` BIGINT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(255) NULL DEFAULT 'null',
  PRIMARY KEY (`codigo`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`periodos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`periodos` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`periodos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `desconto` FLOAT NOT NULL,
  `quantidade_dias` INT NOT NULL,
  `codigo_plano` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_periodos_planos1_idx` (`codigo_plano` ASC),
  CONSTRAINT `fk_periodos_planos1`
    FOREIGN KEY (`codigo_plano`)
    REFERENCES `na_nuvem`.`planos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`assinaturas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`assinaturas` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`assinaturas` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codigo_cliente` INT NOT NULL,
  `codigo_periodo` INT NOT NULL,
  `data_hora` DATETIME NOT NULL,
  `dias` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_clientes_has_planos_clientes1_idx` (`codigo_cliente` ASC),
  INDEX `fk_assinaturas_periodos1_idx` (`codigo_periodo` ASC),
  CONSTRAINT `fk_clientes_has_planos_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assinaturas_periodos1`
    FOREIGN KEY (`codigo_periodo`)
    REFERENCES `na_nuvem`.`periodos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`acoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`acoes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`acoes` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome_acao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE INDEX `codigo_acao_UNIQUE` (`codigo` ASC),
  UNIQUE INDEX `nome_acao_UNIQUE` (`nome_acao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`bonus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`bonus` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`bonus` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `quantidade_espaco` BIGINT NOT NULL,
  `codigo_acao` INT NOT NULL,
  `descricao` VARCHAR(255) NULL,
  `imagem` VARCHAR(255) NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_bonus_acoes1_idx` (`codigo_acao` ASC),
  CONSTRAINT `fk_bonus_acoes1`
    FOREIGN KEY (`codigo_acao`)
    REFERENCES `na_nuvem`.`acoes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`bonus_clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`bonus_clientes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`bonus_clientes` (
  `codigo_bonus` INT NOT NULL,
  `codigo_cliente` INT NOT NULL,
  `data_hora` DATETIME NOT NULL,
  PRIMARY KEY (`codigo_bonus`, `codigo_cliente`),
  INDEX `fk_bonus_has_clientes_clientes1_idx` (`codigo_cliente` ASC),
  INDEX `fk_bonus_has_clientes_bonus1_idx` (`codigo_bonus` ASC),
  CONSTRAINT `fk_bonus_has_clientes_bonus1`
    FOREIGN KEY (`codigo_bonus`)
    REFERENCES `na_nuvem`.`bonus` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bonus_has_clientes_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`tags` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`tags` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `palavra` VARCHAR(255) NULL,
  `codigo_cliente` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_tags_clientes1_idx` (`codigo_cliente` ASC),
  CONSTRAINT `fk_tags_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`tags_arquivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`tags_arquivos` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`tags_arquivos` (
  `codigo_arquivo` INT NOT NULL,
  `codigo_tag` INT NOT NULL,
  PRIMARY KEY (`codigo_arquivo`, `codigo_tag`),
  INDEX `fk_arquivos_has_tags_tags1_idx` (`codigo_tag` ASC),
  INDEX `fk_arquivos_has_tags_arquivos1_idx` (`codigo_arquivo` ASC),
  CONSTRAINT `fk_arquivos_has_tags_arquivos1`
    FOREIGN KEY (`codigo_arquivo`)
    REFERENCES `na_nuvem`.`arquivos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_arquivos_has_tags_tags1`
    FOREIGN KEY (`codigo_tag`)
    REFERENCES `na_nuvem`.`tags` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`compartilhamento_diretorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`compartilhamento_diretorio` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`compartilhamento_diretorio` (
  `codigo_cliente` INT NOT NULL,
  `codigo_diretorio` INT NOT NULL,
  `permissao` TINYINT NULL,
  PRIMARY KEY (`codigo_cliente`, `codigo_diretorio`),
  INDEX `fk_clientes_has_diretorio_diretorio1_idx` (`codigo_diretorio` ASC),
  INDEX `fk_clientes_has_diretorio_clientes1_idx` (`codigo_cliente` ASC),
  CONSTRAINT `fk_clientes_has_diretorio_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_diretorio_diretorio1`
    FOREIGN KEY (`codigo_diretorio`)
    REFERENCES `na_nuvem`.`diretorios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`compartilhamento_arquivo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`compartilhamento_arquivo` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`compartilhamento_arquivo` (
  `codigo_cliente` INT NOT NULL,
  `codigo_arquivo` INT NOT NULL,
  `permissao` TINYINT NOT NULL,
  INDEX `fk_clientes_has_arquivos_arquivos1_idx` (`codigo_arquivo` ASC),
  INDEX `fk_clientes_has_arquivos_clientes1_idx` (`codigo_cliente` ASC),
  PRIMARY KEY (`codigo_cliente`, `codigo_arquivo`),
  CONSTRAINT `fk_clientes_has_arquivos_clientes1`
    FOREIGN KEY (`codigo_cliente`)
    REFERENCES `na_nuvem`.`clientes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_arquivos_arquivos1`
    FOREIGN KEY (`codigo_arquivo`)
    REFERENCES `na_nuvem`.`arquivos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`funcoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`funcoes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`funcoes` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`grupos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`grupos` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`grupos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`permissoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`permissoes` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`permissoes` (
  `funcao_codigo` INT NOT NULL,
  `grupo_codigo` INT NOT NULL,
  PRIMARY KEY (`funcao_codigo`, `grupo_codigo`),
  INDEX `fk_funcao_has_grupo_grupo1_idx` (`grupo_codigo` ASC),
  INDEX `fk_funcao_has_grupo_funcao1_idx` (`funcao_codigo` ASC),
  CONSTRAINT `fk_funcao_has_grupo_funcao1`
    FOREIGN KEY (`funcao_codigo`)
    REFERENCES `na_nuvem`.`funcoes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_grupo_grupo1`
    FOREIGN KEY (`grupo_codigo`)
    REFERENCES `na_nuvem`.`grupos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`usuarios` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `grupo_codigo` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_usuario_grupo1_idx` (`grupo_codigo` ASC),
  CONSTRAINT `fk_usuario_grupo1`
    FOREIGN KEY (`grupo_codigo`)
    REFERENCES `na_nuvem`.`grupos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `na_nuvem`.`auditorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `na_nuvem`.`auditorias` ;

CREATE TABLE IF NOT EXISTS `na_nuvem`.`auditorias` (
  `funcao_codigo` INT NOT NULL,
  `usuario_codigo` INT NOT NULL,
  `data_hora` DATETIME NOT NULL,
  PRIMARY KEY (`funcao_codigo`, `usuario_codigo`),
  INDEX `fk_funcao_has_usuario_usuario1_idx` (`usuario_codigo` ASC),
  INDEX `fk_funcao_has_usuario_funcao1_idx` (`funcao_codigo` ASC),
  CONSTRAINT `fk_funcao_has_usuario_funcao1`
    FOREIGN KEY (`funcao_codigo`)
    REFERENCES `na_nuvem`.`funcoes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_usuario_usuario1`
    FOREIGN KEY (`usuario_codigo`)
    REFERENCES `na_nuvem`.`usuarios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

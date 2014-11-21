SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `nanuvem` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `nanuvem` ;

-- -----------------------------------------------------
-- Table `nanuvem`.`clientes`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`clientes` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NOT NULL ,
  `senha` VARCHAR(12) NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`diretorio`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`diretorio` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `codigo_cliente` INT NOT NULL ,
  `diretorio_pai` INT NOT NULL ,
  `nome` VARCHAR(255) NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_diretorio_diretorio1_idx` (`diretorio_pai` ASC) ,
  INDEX `fk_diretorio_clientes1_idx` (`codigo_cliente` ASC) ,
  CONSTRAINT `fk_diretorio_diretorio1`
    FOREIGN KEY (`diretorio_pai` )
    REFERENCES `nanuvem`.`diretorio` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_diretorio_clientes1`
    FOREIGN KEY (`codigo_cliente` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`arquivos`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`arquivos` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `codigo_diretorio` INT NOT NULL ,
  `nome` VARCHAR(255) NOT NULL ,
  `extensao` VARCHAR(10) NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_arquivos_diretorio1_idx` (`codigo_diretorio` ASC) ,
  CONSTRAINT `fk_arquivos_diretorio1`
    FOREIGN KEY (`codigo_diretorio` )
    REFERENCES `nanuvem`.`diretorio` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`versoes`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`versoes` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `codigo_arquivo` INT NOT NULL ,
  `status` TINYINT NOT NULL ,
  `caminho` VARCHAR(255) NOT NULL ,
  `data_hora` DATETIME NOT NULL ,
  `tamanho` BIGINT NOT NULL ,
  `clientes_codigo` INT NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_versoes_arquivos_idx` (`codigo_arquivo` ASC) ,
  INDEX `fk_versoes_clientes1_idx` (`clientes_codigo` ASC) ,
  CONSTRAINT `fk_versoes_arquivos`
    FOREIGN KEY (`codigo_arquivo` )
    REFERENCES `nanuvem`.`arquivos` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_versoes_clientes1`
    FOREIGN KEY (`clientes_codigo` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`comentarios`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`comentarios` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `codigo_versao` INT NOT NULL ,
  `texto` TEXT NOT NULL ,
  `data_hora` DATETIME NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_comentarios_versoes1_idx` (`codigo_versao` ASC) ,
  CONSTRAINT `fk_comentarios_versoes1`
    FOREIGN KEY (`codigo_versao` )
    REFERENCES `nanuvem`.`versoes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`planos`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`planos` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `descricao` TEXT NOT NULL ,
  `valor` DOUBLE NOT NULL ,
  `espaco` BIGINT NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`periodos`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`periodos` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `desconto` FLOAT NOT NULL ,
  `quantidade_dias` INT NOT NULL ,
  `codigo_plano` INT NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_periodos_planos1_idx` (`codigo_plano` ASC) ,
  CONSTRAINT `fk_periodos_planos1`
    FOREIGN KEY (`codigo_plano` )
    REFERENCES `nanuvem`.`planos` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`assinaturas`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`assinaturas` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `codigo_cliente` INT NOT NULL ,
  `codigo_periodo` INT NOT NULL ,
  `codigo_plano` INT NOT NULL ,
  `data_hora` DATETIME NOT NULL ,
  `espaco_utilizado` BIGINT NOT NULL ,
  `espaco_disponivel` BIGINT NOT NULL ,
  `dias` INT NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_clientes_has_planos_clientes1_idx` (`codigo_cliente` ASC) ,
  INDEX `fk_assinaturas_periodos1_idx` (`codigo_periodo` ASC) ,
  CONSTRAINT `fk_clientes_has_planos_clientes1`
    FOREIGN KEY (`codigo_cliente` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assinaturas_periodos1`
    FOREIGN KEY (`codigo_periodo` )
    REFERENCES `nanuvem`.`periodos` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`bonus`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`bonus` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  `quantidade_espaco` BIGINT NOT NULL ,
  `acao` INT NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`bonus_clientes`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`bonus_clientes` (
  `codigo_bonus` INT NOT NULL ,
  `codigo_cliente` INT NOT NULL ,
  `data_hora` DATETIME NOT NULL ,
  `quantidade_espaco` BIGINT NOT NULL ,
  PRIMARY KEY (`codigo_bonus`, `codigo_cliente`) ,
  INDEX `fk_bonus_has_clientes_clientes1_idx` (`codigo_cliente` ASC) ,
  INDEX `fk_bonus_has_clientes_bonus1_idx` (`codigo_bonus` ASC) ,
  CONSTRAINT `fk_bonus_has_clientes_bonus1`
    FOREIGN KEY (`codigo_bonus` )
    REFERENCES `nanuvem`.`bonus` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bonus_has_clientes_clientes1`
    FOREIGN KEY (`codigo_cliente` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`tags`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`tags` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `palavra` VARCHAR(255) NULL ,
  `codigo_clientes` INT NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_tags_clientes1_idx` (`codigo_clientes` ASC) ,
  CONSTRAINT `fk_tags_clientes1`
    FOREIGN KEY (`codigo_clientes` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`tags_arquivos`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`tags_arquivos` (
  `codigo_arquivo` INT NOT NULL ,
  `codigo_tags` INT NOT NULL ,
  PRIMARY KEY (`codigo_arquivo`, `codigo_tags`) ,
  INDEX `fk_arquivos_has_tags_tags1_idx` (`codigo_tags` ASC) ,
  INDEX `fk_arquivos_has_tags_arquivos1_idx` (`codigo_arquivo` ASC) ,
  CONSTRAINT `fk_arquivos_has_tags_arquivos1`
    FOREIGN KEY (`codigo_arquivo` )
    REFERENCES `nanuvem`.`arquivos` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_arquivos_has_tags_tags1`
    FOREIGN KEY (`codigo_tags` )
    REFERENCES `nanuvem`.`tags` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`compartilhamento_diretorio`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`compartilhamento_diretorio` (
  `codigo_cliente` INT NOT NULL ,
  `codigo_diretorio` INT NOT NULL ,
  `permissao` TINYINT NULL ,
  PRIMARY KEY (`codigo_cliente`, `codigo_diretorio`) ,
  INDEX `fk_clientes_has_diretorio_diretorio1_idx` (`codigo_diretorio` ASC) ,
  INDEX `fk_clientes_has_diretorio_clientes1_idx` (`codigo_cliente` ASC) ,
  CONSTRAINT `fk_clientes_has_diretorio_clientes1`
    FOREIGN KEY (`codigo_cliente` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_diretorio_diretorio1`
    FOREIGN KEY (`codigo_diretorio` )
    REFERENCES `nanuvem`.`diretorio` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`compartilhamento_arquivo`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`compartilhamento_arquivo` (
  `codigo_clientes` INT NOT NULL ,
  `codigo_arquivos` INT NOT NULL ,
  `permissao` TINYINT NOT NULL ,
  PRIMARY KEY (`codigo_clientes`) ,
  INDEX `fk_clientes_has_arquivos_arquivos1_idx` (`codigo_arquivos` ASC) ,
  INDEX `fk_clientes_has_arquivos_clientes1_idx` (`codigo_clientes` ASC) ,
  CONSTRAINT `fk_clientes_has_arquivos_clientes1`
    FOREIGN KEY (`codigo_clientes` )
    REFERENCES `nanuvem`.`clientes` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_arquivos_arquivos1`
    FOREIGN KEY (`codigo_arquivos` )
    REFERENCES `nanuvem`.`arquivos` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`funcao`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`funcao` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`grupo`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`grupo` (
  `codigo` INT NOT NULL ,
  `nome` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`permissao`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`permissao` (
  `codigo_funcao` INT NOT NULL ,
  `codigo_grupo` INT NOT NULL ,
  PRIMARY KEY (`codigo_funcao`, `codigo_grupo`) ,
  INDEX `fk_funcao_has_grupo_grupo1_idx` (`codigo_grupo` ASC) ,
  INDEX `fk_funcao_has_grupo_funcao1_idx` (`codigo_funcao` ASC) ,
  CONSTRAINT `fk_funcao_has_grupo_funcao1`
    FOREIGN KEY (`codigo_funcao` )
    REFERENCES `nanuvem`.`funcao` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_grupo_grupo1`
    FOREIGN KEY (`codigo_grupo` )
    REFERENCES `nanuvem`.`grupo` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`usuario`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`usuario` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NOT NULL ,
  `senha` VARCHAR(45) NOT NULL ,
  `grupo_codigo` INT NOT NULL ,
  PRIMARY KEY (`codigo`) ,
  INDEX `fk_usuario_grupo1_idx` (`grupo_codigo` ASC) ,
  CONSTRAINT `fk_usuario_grupo1`
    FOREIGN KEY (`grupo_codigo` )
    REFERENCES `nanuvem`.`grupo` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nanuvem`.`auditoria`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `nanuvem`.`auditoria` (
  `funcao_codigo` INT NOT NULL ,
  `usuario_codigo` INT NOT NULL ,
  `data_hora` DATETIME NOT NULL ,
  PRIMARY KEY (`funcao_codigo`, `usuario_codigo`) ,
  INDEX `fk_funcao_has_usuario_usuario1_idx` (`usuario_codigo` ASC) ,
  INDEX `fk_funcao_has_usuario_funcao1_idx` (`funcao_codigo` ASC) ,
  CONSTRAINT `fk_funcao_has_usuario_funcao1`
    FOREIGN KEY (`funcao_codigo` )
    REFERENCES `nanuvem`.`funcao` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_funcao_has_usuario_usuario1`
    FOREIGN KEY (`usuario_codigo` )
    REFERENCES `nanuvem`.`usuario` (`codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

use na_nuvem;

/*********************************************************************************
* Clientes
*********************************************************************************/

/*
  Clientes
*/
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Maria', 'maria@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('João', 'joao@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('José', 'jose@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Victor', 'vitinho@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Natã', 'natanzinho@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Iago', 'iaguinho@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Felipe', 'felipinho@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Fernanda', 'fernandinha@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Suse', 'susaninha@gmail.com', '123', 100, 50);
insert into clientes (nome, email, senha, espaco_total, espaco_utilizado) 
  values('Bruno', 'bruninho@gmail.com', '123', 100, 50);

select * from clientes;

/*
  Planos
*/
insert into planos (nome, descricao, valor, espaco) 
  values ('Master', 'Pra quem é mais phoda ainda.', 5000, 5000);
insert into planos (nome, descricao, valor, espaco) 
  values ('Gold', 'Pra quem é phodão.', 1000, 1000);
insert into planos (nome, descricao, valor, espaco) 
  values ('Silver', 'Pra quem é phoda.', 500, 500);
insert into planos (nome, descricao, valor, espaco) 
  values ('Bronze', 'Pra quem é phodinha.', 250, 250);
    
select * from planos;

/*
  Períodos
*/
insert into periodos (desconto, quantidade_dias, codigo_plano) 
  values (0.05, 30, 4);
insert into periodos (desconto, quantidade_dias, codigo_plano) 
  values (0.1, 60, 3);
insert into periodos (desconto, quantidade_dias, codigo_plano) 
  values (0.15, 90, 2);
insert into periodos (desconto, quantidade_dias, codigo_plano) 
  values (0.2, 120, 1);

select * from periodos;

/*
  Ações
*/
insert into acoes (nome_acao) values ('Enviar Emails');
insert into acoes (nome_acao) values ('Curtir Pagina no Facebook');
insert into acoes (nome_acao) values ('Retwittar');
insert into acoes (nome_acao) values ('Curtir no Google Mais');
insert into acoes (nome_acao) values ('1 Ano de Uso');  
insert into acoes (nome_acao) values ('2 Anos de Uso');

select * from acoes;

/*
  Bônus
*/
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Light', 50, 1);
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Medium', 75, 2);
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Mega', 100, 3);
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Ultra', 500, 4);
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Power', 750, 5);
insert into bonus (nome, quantidade_espaco, codigo_acao) values ('Supimpa',1000, 6);

select * from bonus;

/*
  Bônus Clientes
*/
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 1, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 1, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 1, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 1, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 1, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 1, '2014-11-14');

insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 2, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 2, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 2, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 2, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 2, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 2, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 3, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 3, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 3, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 3, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 3, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 3, '2014-11-14');

insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 4, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 4, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 4, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 4, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 4, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 4, '2014-11-14');

insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 5, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 5, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 5, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 5, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 5, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 5, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 6, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 6, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 6, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 6, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 6, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 6, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 7, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 7, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 7, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 7, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 7, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 7, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 8, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 8, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 8, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 8, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 8, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 8, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 9, '2014-11-19');   
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 9, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 9, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 9, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 9, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 9, '2014-11-14');
    
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (1, 10, '2014-11-19');  
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (2, 10, '2014-11-18');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (3, 10, '2014-11-17');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (4, 10, '2014-11-16');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (5, 10, '2014-11-15');
insert into bonus_clientes (codigo_bonus, codigo_cliente, data_hora)
  values (6, 10, '2014-11-14');

select * from bonus_clientes;

/*
  Assinaturas
*/
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (1, 1, '2014-10-01', 360);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (1, 2, '2014-09-02', 180);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (2, 1, '2014-08-03', 90);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (2, 3, '2014-07-04', 360);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (3, 3, '2014-06-05', 180);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (3, 2, '2014-05-06', 90);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (4, 1, '2014-04-07', 360);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (4, 4, '2014-03-08', 160);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (5, 4, '2014-02-09', 90);
insert into assinaturas (codigo_cliente, codigo_periodo, data_hora, dias) 
  values (5, 4, '2014-01-10', 360);

/*********************************************************************************
* Arquivos
*********************************************************************************/
/*
  Diretórios
*/
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 1, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 1, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 1, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 1, 'Músicas');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 2, 'Filmes');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 2, 'Pasta1');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 2, 'Pasta2');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (1, 7, 'A_Pasta_1');
    
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (2, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (2, 6, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (2, 6, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (2, 6, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (2, 6, 'Músicas');
    
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (3, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (3, 11, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (3, 11, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (3, 11, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (3, 11, 'Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (4, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (4, 16, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (4, 16, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (4, 16, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (4, 16, 'Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (5, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (5, 21, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (5, 21, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (5, 21, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (5, 21, '/Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (6, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (6, 26, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (6, 26, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (6, 26, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (6, 26, 'Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (7, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (7, 31, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (7, 31, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (7, 31, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (7, 31, 'Músicas');
    
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (8, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (8, 36, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (8, 36, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (8, 36, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (8, 36, 'Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (9, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (9, 41, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (9, 41, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (9, 41, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (9, 41, 'Músicas');

insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, null, '/');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 46, 'Arquivos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 46, 'Vídeos');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 46, 'Imagens');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 46, 'Músicas');
    
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 50, 'Álbum 01');
insert into diretorios (codigo_cliente, diretorio_pai, nome)
  values (10, 51, 'Sub do Álbum 01');

select * from  diretorios;

/*
  Arquivos
*/

insert into arquivos (codigo_diretorio, nome, extensao)
  values(1, 'arquivo 01', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(1, 'arquivo 02', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(2, 'arquivo 03', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(2, 'arquivo 04', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(3, 'arquivo 05', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(3, 'arquivo 06', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(4, 'arquivo 07', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(4, 'arquivo 08', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(5, 'arquivo 09', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(5, 'arquivo 10', 'txt');
    
insert into arquivos (codigo_diretorio, nome, extensao)
  values(6, 'arquivo 01', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(6, 'arquivo 02', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(7, 'arquivo 03', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(7, 'arquivo 04', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(8, 'arquivo 05', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(8, 'arquivo 06', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(9, 'arquivo 07', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(9, 'arquivo 08', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(10, 'arquivo 09', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(10, 'arquivo 10', 'txt');
    
insert into arquivos (codigo_diretorio, nome, extensao)
  values(11, 'arquivo 01', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(11, 'arquivo 02', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(12, 'arquivo 03', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(12, 'arquivo 04', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(13, 'arquivo 05', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(13, 'arquivo 06', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(14, 'arquivo 07', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(14, 'arquivo 08', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(15, 'arquivo 09', 'txt');
insert into arquivos (codigo_diretorio, nome, extensao)
  values(15, 'arquivo 10', 'txt');


select * from arquivos;

/*
  Compartilhamento_arquivo
*/
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (1, 1, 0);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (2, 10, 1);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (3, 15, 2);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (4, 20, 0);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (5, 25, 1);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (6, 30, 2);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (7, 4, 0);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (8, 5, 1);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (9, 6, 2);
insert into compartilhamento_arquivo (codigo_cliente, codigo_arquivo, permissao) 
  values (10, 7, 0);

select * from compartilhamento_arquivo;

/*
  Compartilhamento_diretorio
*/
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 20, 0);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 21, 1);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 22, 2);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 23, 0);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 24, 1);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 25, 2);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 26, 0);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 27, 1);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 28, 2);
insert into compartilhamento_diretorio (codigo_cliente, codigo_diretorio, permissao) 
  values (1, 29, 0);
    
select * from compartilhamento_diretorio;

/*
  Tags
*/
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 1);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 1);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 1);
insert into tags (palavra, codigo_cliente)
  values ('docs', 1);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 2);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 2);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 2);
insert into tags (palavra, codigo_cliente)
  values ('docs', 2);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 3);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 3);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 3);
insert into tags (palavra, codigo_cliente)
  values ('docs', 3);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 4);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 4);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 4);
insert into tags (palavra, codigo_cliente)
  values ('docs', 4);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 5);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 5);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 5);
insert into tags (palavra, codigo_cliente)
  values ('docs', 5);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 6);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 6);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 6);
insert into tags (palavra, codigo_cliente)
  values ('docs', 6);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 7);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 7);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 7);
insert into tags (palavra, codigo_cliente)
  values ('docs', 7);

insert into tags (palavra, codigo_cliente)
  values ('vídeos', 8);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 8);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 8);
insert into tags (palavra, codigo_cliente)
  values ('docs', 8);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 9);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 9);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 9);
insert into tags (palavra, codigo_cliente)
  values ('docs', 9);
    
insert into tags (palavra, codigo_cliente)
  values ('vídeos', 10);
insert into tags (palavra, codigo_cliente)
  values ('pdfs', 10);
insert into tags (palavra, codigo_cliente)
  values ('imagens', 10);
insert into tags (palavra, codigo_cliente)
  values ('docs', 10);
    
select * from tags;

/*
  Tags_arquivos
*/
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (1, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (2, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (3, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (4, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (5, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (6, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (7, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (8, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (9, 4);
insert into tags_arquivos (codigo_arquivo, codigo_tag) 
  values (10, 4);
    
select * from tags_arquivos;

/*
 Versões
*/
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 1000, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 2000, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 3000, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 4000, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 5000, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 6000, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 7000, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 8000, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 9000, 9);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (1, 0, '2015-11-20', 10, 9);

insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (2, 0, '2015-11-20', 1110, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (3, 0, '2015-11-20', 2210, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (4, 0, '2015-11-20', 3310, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (5, 0, '2015-11-20', 4420, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (6, 0, '2015-11-20', 5550, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (7, 0, '2015-11-20', 6670, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (8, 0, '2015-11-20', 7730, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (9, 0, '2015-11-20', 8810, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (10, 0, '2015-11-20', 9920, 9);

insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (11, 0, '2015-11-20', 1101, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (12, 0, '2015-11-20', 2201, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (13, 0, '2015-11-20', 3301, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (14, 0, '2015-11-20', 4401, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (15, 0, '2015-11-20', 5506, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (16, 0, '2015-11-20', 6607, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (17, 0, '2015-11-20', 7705, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (18, 0, '2015-11-20', 8807, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (19, 0, '2015-11-20', 9900, 9);

insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (20, 0, '2015-11-20', 1100, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (21, 0, '2015-11-20', 2200, 1);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (22, 0, '2015-11-20', 3300, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (23, 0, '2015-11-20', 4400, 3);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (24, 0, '2015-11-20', 5500, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (25, 0, '2015-11-20', 6600, 5);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (26, 0, '2015-11-20', 7700, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (27, 0, '2015-11-20', 8800, 7);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (28, 0, '2015-11-20', 9900, 9);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (29, 0, '2015-11-20', 9900, 9);
insert into versoes (codigo_arquivo, situacao, data_hora, tamanho, codigo_cliente)
  values (30, 0, '2015-11-20', 9900, 9);    
select * from versoes;

/*
  Comentários
*/
insert into comentarios (codigo_versao, texto, data_hora) 
  values (1, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (2, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (3, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (4, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (5, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (6, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (7, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (8, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (9, 'Comentário 01', '2014-11-20');
insert into comentarios (codigo_versao, texto, data_hora) 
  values (10, 'Comentário 01', '2014-11-20');
    
select * from comentarios;
  
/*********************************************************************************
* Administradores
********************************************************************************/

insert into funcao (nome) values ('Editar');
insert into funcao (nome) values ('Ler');
insert into funcao (nome) values ('Excluir');
insert into funcao (nome) values ('Deus');
insert into funcao (nome) values ('Configurar');
insert into funcao (nome) values ('Mesclar');
insert into funcao (nome) values ('Induzir');
insert into funcao (nome) values ('Controlar');
insert into funcao (nome) values ('Memorizar');
insert into funcao (nome) values ('Fuçar');

insert into grupo (nome) values ('Andorinhas');
insert into grupo (nome) values ('Papagaios');
insert into grupo (nome) values ('Elefantes');
insert into grupo (nome) values ('Micos Leões Dourados');
insert into grupo (nome) values ('Ursos Pandas');
insert into grupo (nome) values ('Pelicanos');
insert into grupo (nome) values ('Loiras');
insert into grupo (nome) values ('Morenas');
insert into grupo (nome) values ('Ruivas');
insert into grupo (nome) values ('Latinas');

/*******************************************************************************
 * Views
 *******************************************************************************/
select * from versoes inner join arquivos on versoes.codigo_arquivo=arquivos.codigo where codigo_cliente=1;

select * from arquivos a where a.codigo = 1;
select codigo_arquivo, tamanho, data_hora from versoes v where codigo_arquivo=1 order by data_hora asc limit 1;

create view listDirsFromClients as
select c.codigo as 'id_client', d.codigo as 'id', d.diretorio_pai as 'id_father', d.nome as 'name' from 
  diretorios d inner join clientes c on d.codigo_cliente=c.codigo order by d.diretorio_pai;

select * from listDirsFromClients where id_client=1;

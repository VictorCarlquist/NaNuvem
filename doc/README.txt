A base de dados 'na_nuvem' precisa existir no banco de dados. As tabelas serão recriadas, então
seus dados serão perdidos.

Se, por algum motivo, precisar fazer backup desses dados, use: 
shell> mysqldump -u user -p na_nuvem > backup_inutil.sql

Simplesmente carregue o arquivo 'db_na_nuvem.sql' com o seguinte comando:
shell> mysql -u user -p na_nuvem < db_na_nuvem.sql

A base de dados será recriada já com os inserts.

Att,
Guilherme A. de Macedo.




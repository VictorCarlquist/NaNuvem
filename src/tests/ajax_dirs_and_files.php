<html>
<head>
    <meta charset="utf-8" ></meta> 
    <title>Test File.info</title>

</head>
<body>
    
    <h2>DIR</h2>
    <div id='text1'></div>
    <br>
    <h2>FILE</h2>
    <div id='text2'></div>

    <script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="../js/nanuvem_base.js"></script>
    <script type="text/javascript" src="../js/nanuvem_constant.js"></script>
    <script type="text/javascript" src="../js/nanuvem_version.js"></script>
    <script type="text/javascript" src="../js/nanuvem_file.js"></script>
    <script type="text/javascript" src="../js/nanuvem_dir.js"></script>

    <script>

        function deleteFile(codigo, codigo_diretorio)
        {
            DM.deleteFile(codigo, codigo_diretorio);
        }

        function getVersions(codigo, codigo_diretorio)
        {
            DM.getVersions(codigo, codigo_diretorio);
        }

        var dados;
        
        function printDir(dir, i, tab)
        {
            var space = "";
            for(var i = 0 ; i < tab; i++) {
                space+= "+";
            }

            dados += space + dir.name + "<br>";
            
            if(!dir.dirs)
                return;

            for (var i = 0; i < dir.dirs.length; i++)
                printDir(dir.dirs[i], i, tab+1);
        }
        var DM = new NANUVEM.DirectoryManager(
                function (data, type, obj) {
                    // Este if apenas será chamado na primeira vez que o site 
                    // for carredo. Ele irá carregar todos os diretórios, sem
                    // os arquivos, para criar a "arvore de diretórios".
                    if (type == NANUVEM.TYPE_DIRECTORY) {
                        
                        // Exemplo de acesso aos diretorios (hierarquia)
                        dados = " ";
                        printDir(DM.dirs[0], -1, 0); // root "/"
                        document.getElementById("text1").innerHTML = dados;
                        
                        // Campos dirs[0]
                        // 'id_client', 
                        // 'id', 
                        // 'id_father'
                        // 'name'
                        // dirs: []
                        // files: []
                        
                        // Carrega os arquivos dentro do diretório.
                        DM.changeDirectory(DM.dirs[0].dirs[0].id);
                    }
                    // Este if será chamado quando:
                    // 1 - A função |changeDirectory| for chamada (arquivos carregados)
                    // 2 - Um arquivo sofrer modificações (delete, move)
                    if (type == NANUVEM.TYPE_FILE) {

                        // Verifica se os arquivos da pasta foram carregados,
                        // senão, solicita o carregamento desses arquivos.
                        if (!DM.dirs[0].dirs[0].files) {
                            DM.changeDirectory(DM.dirs[0].dirs[0].id);
                            return;
                        }

                        document.getElementById("text2").innerHTML = "";
                        // Campos files[0]
                        // id :1
                        // id_dir:2
                        // name:"nome"
                        // ext:"txt"
                        // size: 1100
                        var file = DM.dirs[0].dirs[0].files[0];
                        
                        // verifica se este arquivo existe ou se foi excluido
                        // Se este arquivo fpi excluido, ele não poderá exibir o link abaixo.
                        if (file) {
                            document.getElementById("text2").innerHTML =
                            "<a href='javascript:deleteFile("+file.id+","+ file.id_dir+");'>Exemplo: Excluir " + file.name + "</a> <br>";
                        }   
                        if (!DM.dirs[0].files) {
                            DM.changeDirectory(DM.dirs[0].id);
                            return;
                        }
                        file = DM.dirs[0].files[0];
                        document.getElementById("text2").innerHTML +=
                        "<a href='javascript:getVersions("+file.id+","+ file.id_dir+");'>Exemplo: Pegar Versões " + file.name + "</a>";
                        
                    }
                    // Quando este if for verdadeiro, o parametro |obj| será o 
                    // arquivo que recebeu as versões
                    if (type == NANUVEM.TYPE_VERSIONS) {
                        // Campos do versions []
                        // "id"
                        // "id_file"
                        // $this->db->select("situacao as status"
                        // "date_time"
                        // "size"
                        // "id_client"
                        // "as id_dir"
                        // "name"
                        // "ext"
                        alert(obj.versions[0].size);
                    }

                    // Quando este if for verdadeiro, o parametro |obj| será 
                    // a versão com os comentários preenchidos
                    if (type == NANUVEM.TYPE_VERSION_COMMENTS) {
                        // Campos do comments []
                        // "id"
                        // "id_version"
                        // "text"
                        // "date_time"
                        alert(obj.comments[0].texto);
                    }
                    
                }, 0
            );
        
    </script>

</body>
</html>
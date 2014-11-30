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
        function printDir(dir, i)
        {
            dados += i +" + "+ dir.dirName + "<br>";
            if(!dir.dirs)
                return;

            for (var i = 0; i < dir.dirs.length; i++)
                printDir(dir.dirs[i], i);
        }
        var DM = new NANUVEM.DirectoryManager(
                function (data, type) {
                    // Este if apenas será chamado na primeira vez que o site 
                    // for carredo. Ele irá carregar todos os diretórios, sem
                    // os arquivos, para criar a "arvore de diretórios".
                    if (type == NANUVEM.TYPE_DIRECTORY) {
                        
                        // Exemplo de acesso aos diretorios (hierarquia)
                        dados = " ";
                        printDir(DM.dirs[0], -1); // root "/"
                        document.getElementById("text1").innerHTML = dados;
                        
                        // Campos dirs[0]
                        // "codCliente":"1",
                        // "dir":"2",
                        // "fatherDir":"1",
                        // "dirName":"Arquivos"
                        // dirs: []
                        // files: []
                        
                        // Carrega os arquivos dentro do diretório.
                        DM.changeDirectory(DM.dirs[0].dirs[0].dir);
                    }
                    // Este if será chamado quando:
                    // 1 - A função |changeDirectory| for chamada (arquivos carregados)
                    // 2 - Um arquivo sofrer modificações (delete, move)
                    // 3 - Receber versões
                    if (type == NANUVEM.TYPE_FILE) {

                        // Verifica se os arquivos da pasta foram carregados,
                        // senão, solicita o carregamento desses arquivos.
                        if (!DM.dirs[0].dirs[0].files) {
                            DM.changeDirectory(DM.dirs[0].dirs[0].dir);
                            return;
                        }

                        // Campos files[0]
                        // "codigo":"3",
                        // "codigo_diretorio":"2",
                        // "nome":"arquivo 03",
                        // "extensao":"txt"
                        var file = DM.dirs[0].dirs[0].files[0];
                        document.getElementById("text2").innerHTML =
                        "<a href='javascript:deleteFile("+file.codigo+","+ file.codigo_diretorio+");'>" + file.nome + "</a> <br>";

                        if (!DM.dirs[0].files) {
                            DM.changeDirectory(DM.dirs[0].dir);
                            return;
                        }
                        file = DM.dirs[0].files[0];
                        document.getElementById("text2").innerHTML +=
                        "<a href='javascript:getVersions("+file.codigo+","+ file.codigo_diretorio+");'>" + file.nome + "</a>";
                        
                    }
                    
                }, 0
            );
        
    </script>

</body>
</html>

  CREATE TABLE infoD_tif_usuario_comunidade (
    id_usuario_comunidade  int primary key auto_increment,
    id_usuario             int,
    id_comunidade          int,
    foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE
    );




  CREATE TABLE infoD_tif_favoritos (
    id_favoritos           int primary key auto_increment,
    id_usuario             int,
    id_anime               int,
    foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_anime) references infoD_tif_animes(id_anime) ON DELETE CASCADE ON UPDATE CASCADE
    );
  
  

  
  CREATE TABLE infoD_tif_usuario (
  id_usuario               int primary key auto_increment,
  nm_usuario               varchar(19) NOT NULL,
  ds_email                 varchar(255) NOT NULL,
  ds_senha                 varchar(10) NOT NULL,
  ds_telefone              varchar(19) NULL,
  dt_criacao               datetime NULL,
  ds_perfil                varchar(255) NULL
  );
  
  
  
  
  CREATE TABLE infoD_tif_animes (
  id_anime                 int primary key auto_increment,
  nm_anime                 varchar(255) NULL,
  ds_classificação         varchar(255) NULL,
  ds_temporadas            varchar(255) NULL,
  ds_genero                varchar(255) NULL,
  ds_estrelando            varchar(255) NULL,
  ds_sinopse               varchar(5555) NULL,
  ds_sobre                 varchar(5555) NULL,
  ds_enredo                varchar(5555) NULL,
  ds_capa                  varchar(155) NULL,
  dt_postagem              datetime NULL,
  dt_ano                   date NULL,
  ds_video1                varchar(1555) NULL,
  ds_video2                varchar(1555) NULL,
  ds_imagem                varchar(1555) NULL
  );





  CREATE TABLE infoD_tif_comunidade (
  id_comunidade            int primary key auto_increment,
  id_usuario               int NOT NULL,
  ds_capa                  varchar(1555) NOT NULL,
  nm_comunidade            varchar(255) NOT NULL,
  dt_criacao               datetime NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
  );
  


  CREATE TABLE infoD_tif_comentario (
  id_comentario            int primary key auto_increment,
  id_usuario               int NOT NULL,
  id_anime                 int NOT NULL,
  ds_comentario            varchar(255) NOT NULL,
  dt_comentario            datetime NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_anime) references infoD_tif_animes(id_anime) ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  
  CREATE TABLE infoD_tif_chat (
  id_chat                  int primary key auto_increment,
  id_usuario               int NULL,
  id_comunidade            int NULL,
  ds_mensagem              varchar(255) NULL,
  dt_mensagem              datetime NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  
  
  
  
  
  CREATE TABLE infoD_tif_autorizados (
  id_autorizados           int primary key auto_increment,
  id_usuario               int NOT NULL,
  id_comunidade            int NOT NULL,
  bt_postar                boolean NOT NULL,
  bt_criar_comunidade      boolean NOT NULL,
  bt_alterar               boolean NOT NULL,
  bt_adicionar_pessoas     boolean NOT NULL,
  bt_banir                 boolean NOT NULL,
  bt_silenciar             boolean NOT NULL,
  bt_promover_adm          boolean NOT NULL,
  bt_permitir_entrada      boolean NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE
  );

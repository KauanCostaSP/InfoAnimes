  CREATE TABLE infoD_tif_usuario_comunidade (
    id_usuario_comunidade  int primary key auto_increment,
    id_usuario             int,
    id_comunidade          int,
    foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE
    )ENGINE=InnoDB;




  CREATE TABLE infoD_tif_favoritos (
    id_favoritos           int primary key auto_increment,
    id_usuario             int,
    id_anime               int,
    foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_anime) references infoD_tif_animes(id_anime) ON DELETE CASCADE ON UPDATE CASCADE
    )ENGINE=InnoDB;
  
  

  
  CREATE TABLE infoD_tif_usuario (
  id_usuario               int primary key auto_increment,
  nm_usuario               varchar(19),
  ds_email                 varchar(255),
  ds_senha                 varchar(32),
  ds_telefone              varchar(19),
  dt_criacao               datetime,
  bt_adm                   boolean,
  ds_perfil                varchar(255)
  )ENGINE=InnoDB;
  
  
  
  
  CREATE TABLE infoD_tif_animes (
  id_anime                 int primary key auto_increment,
  nm_anime                 varchar(255),
  ds_classificação         varchar(255),
  ds_temporadas            varchar(255),
  ds_genero                varchar(255),
  ds_estrelando            varchar(255),
  ds_sinopse               varchar(5000),
  ds_sobre                 varchar(5000),
  ds_enredo                varchar(5000),
  ds_capa                  varchar(155),
  dt_postagem              datetime,
  dt_ano                   date,
  ds_video1                varchar(1555),
  ds_video2                varchar(1555),
  ds_imagem                varchar(1555)
  )ENGINE=InnoDB;





  CREATE TABLE infoD_tif_comunidade (
  id_comunidade            int primary key auto_increment,
  id_usuario_comunidade    int,
  ds_capa                  varchar(1555),
  nm_comunidade            varchar(255),
  ds_descricao             varchar(2555),
  dt_criacao               datetime,
  ds_comunidade_imagem     varchar(2555),
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB;
  


  CREATE TABLE infoD_tif_comentario (
  id_comentario            int primary key auto_increment,
  id_usuario               int,
  id_anime                 int,
  ds_comentario            varchar(255),
  dt_comentario            datetime,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_anime) references infoD_tif_animes(id_anime) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB;
  
  
  CREATE TABLE infoD_tif_chat (
  id_chat                  int primary key auto_increment,
  id_usuario               int,
  id_comunidade            int,
  ds_mensagem              varchar(255),
  dt_mensagem              datetime,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB;
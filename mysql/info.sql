
  CREATE TABLE infoD_tif_chat_mensagem (
  id_chat_mensagem         int primary key auto_increment,
  ds_mensagem              varchar(255) NOT NULL,
  dt_mensagem              datetime NOT NULL
  );
  

  
  CREATE TABLE infoD_tif_usuario (
  id_usuario               int primary key auto_increment,
  nm_usuario               varchar(19) NOT NULL,
  ds_email                 varchar(255) NOT NULL,
  ds_senha                 varchar(10) NOT NULL,
  ds_telefone              varchar(19) NOT NULL,
  dt_criacao               datetime NOT NULL,
  bt_login_face            boolean NOT NULL,
  bt_login_insta           boolean NOT NULL,
  bt_login_google          boolean NOT NULL,
  bt_online                boolean NOT NULL,
  ds_perfil                varchar(255) NOT NULL
  );
  
  
  
  
  CREATE TABLE infoD_tif_animes (
  id_anime                 int primary key auto_increment,
  nm_anime                 varchar(255) NOT NULL,
  ds_classificação         varchar(255) NOT NULL,
  ds_temporadas            varchar(255) NOT NULL,
  ds_genero                varchar(255) NOT NULL,
  ds_estrelando            varchar(255) NOT NULL,
  ds_sinopse               varchar(555) NOT NULL,
  ds_sobre                 varchar(555) NOT NULL,
  ds_enredo                varchar(555) NOT NULL,
  ds_capa                  varchar(255) NOT NULL,
  dt_postagem              datetime NOT NULL,
  dt_ano                   date NOT NULL,
  ds_video1                varchar(255) NOT NULL,
  ds_video2                varchar(255) NOT NULL
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
  id_like                  int NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_anime) references infoD_tif_animes(id_anime) ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  
  
  
  CREATE TABLE infoD_tif_chat_usuario (
  id_chat_usuario          int primary key auto_increment,
  id_usuario               int NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  
  
  
  CREATE TABLE infoD_tif_chat (
  id_chat                  int primary key auto_increment,
  id_chat_usuario          int NOT NULL,
  id_chat_mensagem         int NOT NULL,
  foreign key (id_chat_usuario) references infoD_tif_chat_usuario(id_chat_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_chat_mensagem) references infoD_tif_chat_mensagem(id_chat_mensagem) ON DELETE CASCADE ON UPDATE CASCADE
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
  
  
  
  
  
  CREATE TABLE infoD_tif_comentario_post (
  id_comentario_post       int primary key auto_increment,
  id_usuario               int NOT NULL,
  id_comunidade            int NOT NULL,
  ds_comentario            varchar(255) NOT NULL,
  dt_comentario            datetime NOT NULL,
  id_like                  int NOT NULL,
  foreign key (id_usuario) references infoD_tif_usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_comunidade) references infoD_tif_comunidade(id_comunidade) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (id_like) references infoD_tif_like(id_like) ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  
  
  
  
CREATE DATABASE banda3em1;

USE banda3em1;

CREATE TABLE banda (
	banda_logo VARCHAR(100),
	banda_nome VARCHAR(100),
	banda_email VARCHAR(100),
	banda_facebook VARCHAR(100),
	banda_instagram VARCHAR(100),
	banda_youtube VARCHAR(100),
	banda_tiktok VARCHAR(100),
	banda_whatsapp VARCHAR(100),
	banda_cidade VARCHAR(100),
	banda_estado VARCHAR(100),
	banda_historia VARCHAR(1000)
);

CREATE TABLE banda_midia (
	midia_id INT AUTO_INCREMENT PRIMARY KEY,
	midia_tipo VARCHAR(20),
	midia_arquivo VARCHAR(20)
);

CREATE TABLE integrantes (
	integrante_id INT AUTO_INCREMENT PRIMARY KEY,
	integrante_nome VARCHAR(100) NOT NULL,
	integrante_descricao VARCHAR(1000),
	integrante_facebook VARCHAR(100),
	integrante_instagram VARCHAR(100),
	integrante_tiktok VARCHAR(100),
	integrante_whatsapp VARCHAR(100)
);

CREATE TABLE menu (
	menu_id INT AUTO_INCREMENT PRIMARY KEY,
	menu_texto VARCHAR(100),
	menu_link VARCHAR(100)
);

CREATE TABLE videos (
	video_id INT AUTO_INCREMENT PRIMARY KEY,
	video_arquivo VARCHAR(100)
);

CREATE TABLE eventos (
	evento_id INT AUTO_INCREMENT PRIMARY KEY,
	evento_local VARCHAR(100),
	evento_data VARCHAR(100),
	evento_descricao VARCHAR(1000)
);

CREATE TABLE projetos (
	projeto_id INT AUTO_INCREMENT PRIMARY KEY,
	projeto_nome VARCHAR(100),
	projeto_descricao VARCHAR(1000)
);

CREATE TABLE projetos_integrantes (
	projeto_id INT NOT NULL,
	integrante_id INT NOT NULL,
    PRIMARY KEY (projeto_id, integrante_id),
	FOREIGN KEY (projeto_id) REFERENCES projetos(projeto_id),
	FOREIGN KEY (integrante_id) REFERENCES integrantes(integrante_id)
);

CREATE TABLE projetos_midia (
	projeto_id INT NOT NULL,
	midia_id INT NOT NULL,
    PRIMARY KEY (projeto_id, midia_id),
	FOREIGN KEY (projeto_id) REFERENCES projetos(projeto_id),
	FOREIGN KEY (midia_id) REFERENCES banda_midia(midia_id)
);
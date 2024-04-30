SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE IF NOT EXISTS `lk_publics_cibles` (
  `uid` char(9) NOT NULL,
  `lieux_uid` char(9) NOT NULL,
  `publics_cibles_uid` char(9) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `lieux` (`lieux_uid`),
  KEY `publics_cibles` (`publics_cibles_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `lk_types_lieu` (
  `uid` char(9) NOT NULL,
  `lieux_uid` char(9) NOT NULL,
  `types_uid` char(9) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `lieux` (`lieux_uid`),
  KEY `types` (`types_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `t_lieux` (
  `uid` char(9) NOT NULL,
  `users_uid` char(11) NOT NULL,
  `statuts_uid` char(9) NOT NULL,
  `natures_juridiques` char(9) NOT NULL,
  `siren` char(9) DEFAULT NULL,
  `naf` char(5) DEFAULT NULL,
  `nom` varchar(100) NOT NULL,
  `description` longtext DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `pays_uid` char(9) NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `timezones_uid` char(9) DEFAULT NULL,
  `superficies_uid` char(9) DEFAULT NULL,
  `telephone1` varchar(15) DEFAULT NULL,
  `telephone2` varchar(15) DEFAULT NULL,
  `courriel1` varchar(255) DEFAULT NULL,
  `courriel2` varchar(255) DEFAULT NULL,
  `web` varchar(255) DEFAULT NULL,
  `opening_hours` varchar(255) DEFAULT NULL,
  `opening_hours_details` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `dt_add` datetime NOT NULL,
  `dt_edi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`uid`),
  UNIQUE KEY `nom` (`nom`),
  KEY `statut` (`statuts_uid`),
  KEY `siren` (`siren`),
  KEY `naf` (`naf`),
  KEY `superficies` (`superficies_uid`),
  KEY `pays` (`pays_uid`),
  KEY `timezone` (`timezones_uid`),
  KEY `natures_juridiques` (`natures_juridiques`),
  KEY `users_uid` (`users_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_lieux` (`uid`, `users_uid`, `statuts_uid`, `natures_juridiques`, `siren`, `naf`, `nom`, `description`, `adresse`, `pays_uid`, `latitude`, `longitude`, `timezones_uid`, `superficies_uid`, `telephone1`, `telephone2`, `courriel1`, `courriel2`, `web`, `opening_hours`, `opening_hours_details`, `logo`, `dt_add`, `dt_edi`) VALUES
('0079488BE', 'D7F6B3DA36B', 'Ouvert', 'NJ0000002', '', '', 'Test Webmonster', 'Webmonster c\'est le top', '', 'MQ0000001', 0.00000000, 0.00000000, 'MQ0000001', '', '+5960696111759', '', 'hello@webmonster.tech', '', '', '', '', '', '2024-02-26 21:58:41', '2024-02-27 01:58:41');

CREATE TABLE IF NOT EXISTS `t_natures_juridiques` (
  `uid` char(9) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_natures_juridiques` (`uid`, `description`) VALUES
('NJ0000001', 'Association'),
('NJ0000002', 'Collectif citoyen'),
('NJ0000003', 'SARL-SA-SAS-SASU'),
('NJ0000004', 'SCIC-SCOP-CAE'),
('NJ0000005', 'Société Publique Locale'),
('NJ0000006', 'Pôle d’Equilibre Territorial Rural'),
('NJ0000007', 'Département'),
('NJ0000008', 'Région'),
('NJ0000009', 'Groupement d\'Intérêt Public'),
('NJ0000010', 'Intercommunalité'),
('NJ0000011', 'Université'),
('NJ0000012', 'Collège'),
('NJ0000013', 'Lycée'),
('NJ0000014', 'Collectivité locale ou territoriale'),
('NJ0000015', 'Établissement public de coopération intercommunale (EPCI)'),
('NJ0000016', 'Autre / Inconnu'),
('NJ0000017', 'Entreprise Individuel');

CREATE TABLE IF NOT EXISTS `t_pays` (
  `uid` char(9) NOT NULL,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_pays` (`uid`, `nom`) VALUES
('CA0000001', 'Canada'),
('FR0000001', 'France'),
('GF0000001', 'Guyane'),
('GP0000001', 'Guadeloupe'),
('MQ0000001', 'Martinique'),
('PF0000001', 'Polynésie'),
('RE0000001', 'Réunion'),
('YT0000001', 'Mayotte');

CREATE TABLE IF NOT EXISTS `t_photos` (
  `uid` char(9) NOT NULL,
  `lieu_uid` char(9) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `lieu_uid` (`lieu_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `t_publics_cibles` (
  `uid` char(9) NOT NULL,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_publics_cibles` (`uid`, `nom`) VALUES
('PC0000001', '16-30 ans en situation de fragilité'),
('PC0000002', 'Demandeurs d\'emploi'),
('PC0000003', 'Bénéficiaires des minimas sociaux'),
('PC0000004', 'Personnes en situation d\'illetrisme'),
('PC0000005', 'Personnes ne maîtrisant pas la langue française'),
('PC0000006', 'Entreprises'),
('PC0000007', 'Tout public');

CREATE TABLE IF NOT EXISTS `t_reseaux_sociaux` (
  `uid` char(9) NOT NULL,
  `lieu_uid` char(9) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `lieu_uid` (`lieu_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `t_statuts` (
  `uid` char(9) NOT NULL,
  `nom` varchar(30) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_statuts` (`uid`, `nom`) VALUES
('ST0000001', 'Ouvert'),
('ST0000002', 'En projet');

CREATE TABLE IF NOT EXISTS `t_superficies` (
  `uid` char(9) NOT NULL,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_superficies` (`uid`, `nom`) VALUES
('SP0000001', 'Moins de 60m²'),
('SP0000002', 'Entre 60 et 200m²'),
('SP0000003', 'Plus de 200m²');

CREATE TABLE IF NOT EXISTS `t_timezones` (
  `uid` char(9) NOT NULL,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_timezones` (`uid`, `nom`) VALUES
('CA0000001', 'America/Toronto'),
('FR0000001', 'Europe/Paris'),
('GF0000001', 'America/Cayenne'),
('GP0000001', 'America/Guadeloupe'),
('MQ0000001', 'America/Martinique'),
('PF0000001', 'Pacific/Tahiti'),
('RE0000001', 'Indian/Reunion'),
('YT0000001', 'Indian/Mayotte');

CREATE TABLE IF NOT EXISTS `t_types_lieu` (
  `uid` char(9) NOT NULL,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `t_types_lieu` (`uid`, `nom`) VALUES
('TL0000001', 'Agence Web & Marketing'),
('TL0000002', 'Coworking'),
('TL0000003', 'Freelance'),
('TL0000004', 'Incubateur'),
('TL0000005', 'Accélérateur'),
('TL0000006', 'Ateliers artisanaux partagés'),
('TL0000007', 'Fablab / Atelier de Fabrication Numérique'),
('TL0000008', 'Tiers-lieu culturel'),
('TL0000009', 'Tiers-lieu agricole'),
('TL0000010', 'Cuisine partagée / Foodlab'),
('TL0000011', 'LivingLab / Laboratoire d’innovation sociale'),
('TL0000012', 'Espace public numérique'),
('TL0000013', 'Bibliothèque avec espace numérique'),
('TL0000014', 'Centre de formation aux métiers du numérique'),
('TL0000015', 'HackerSpace'),
('TL0000016', 'MakerSpace'),
('TL0000017', 'Espace de technologie éducative'),
('TL0000018', 'Centre multimédia'),
('TL0000019', 'Plateforme de co-création numérique'),
('TL0000020', 'Cluster numérique'),
('TL0000021', 'Espace de réalité virtuelle / augmentée'),
('TL0000022', 'Centre de ressources numériques pour l\'emploi'),
('TL0000023', 'Espace d’inclusion numérique'),
('TL0000024', 'Point d’accès à l’internet public'),
('TL0000025', 'Centre de recherche et développement en TIC'),
('TL0000026', 'Hub d’innovation numérique'),
('TL0000027', 'Centre d\'éducation aux médias et à l\'information'),
('TL0000028', 'Site Internet');

CREATE TABLE IF NOT EXISTS `t_videos` (
  `uid` char(9) NOT NULL,
  `lieu_uid` char(9) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `lieu_uid` (`lieu_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `t_lieux` ADD FULLTEXT KEY `description` (`description`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220103151716 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ac_annee (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, formation_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, annee_active_ues INT DEFAULT NULL, validation_academique VARCHAR(255) DEFAULT NULL, cloture_academique VARCHAR(255) DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_2655A1C4F987D8A8 (user_created_id), INDEX IDX_2655A1C4316B011F (user_updated_id), INDEX IDX_2655A1C45200282E (formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_departement (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, etablissement_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_974E8EFAF987D8A8 (user_created_id), INDEX IDX_974E8EFA316B011F (user_updated_id), INDEX IDX_974E8EFAFF631228 (etablissement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_element (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, module_id INT DEFAULT NULL, nature INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, couleur VARCHAR(255) DEFAULT NULL, coefficient DOUBLE PRECISION DEFAULT NULL, coefficient_epreuve LONGTEXT DEFAULT NULL, type INT DEFAULT NULL, cours_document INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_E86BDA74F987D8A8 (user_created_id), INDEX IDX_E86BDA74316B011F (user_updated_id), INDEX IDX_E86BDA74AFC2B591 (module_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_epreuve (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, nature_epreuve INT DEFAULT NULL, enseignant INT DEFAULT NULL, statut INT DEFAULT NULL, groupe INT DEFAULT NULL, controle_epreuve INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, coefficient DOUBLE PRECISION DEFAULT NULL, date_epreuve DATE DEFAULT NULL, observation LONGTEXT DEFAULT NULL, anonymat INT DEFAULT NULL, nature_anonymat INT DEFAULT NULL, nature VARCHAR(255) DEFAULT NULL, active SMALLINT DEFAULT NULL, reference VARCHAR(255) DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, position_actuel LONGTEXT DEFAULT NULL, historique LONGTEXT DEFAULT NULL, INDEX IDX_7F866032F987D8A8 (user_created_id), INDEX IDX_7F866032316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_etablissement (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, statut VARCHAR(255) DEFAULT NULL, doyen VARCHAR(255) DEFAULT NULL, nature VARCHAR(255) DEFAULT NULL, date DATE DEFAULT NULL, active INT DEFAULT NULL, rapport INT DEFAULT NULL, rapport_ordre INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_76C7181CF987D8A8 (user_created_id), INDEX IDX_76C7181C316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_formation (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, etablissement_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, nbr_annee INT DEFAULT NULL, active INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_EF42FEE5F987D8A8 (user_created_id), INDEX IDX_EF42FEE5316B011F (user_updated_id), INDEX IDX_EF42FEE5FF631228 (etablissement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_module (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, semestre_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, coefficient DOUBLE PRECISION DEFAULT NULL, type VARCHAR(1) DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_9B0E38C4F987D8A8 (user_created_id), INDEX IDX_9B0E38C4316B011F (user_updated_id), INDEX IDX_9B0E38C45577AFDB (semestre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_promotion (id INT AUTO_INCREMENT NOT NULL, formation_id INT DEFAULT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, ordre INT DEFAULT NULL, active INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated INT DEFAULT NULL, INDEX IDX_6E1FA28B5200282E (formation_id), INDEX IDX_6E1FA28BF987D8A8 (user_created_id), INDEX IDX_6E1FA28B316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ac_semestre (id INT AUTO_INCREMENT NOT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, promotion_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, coefficient DOUBLE PRECISION DEFAULT NULL, coefficient_ass DOUBLE PRECISION DEFAULT NULL, INDEX IDX_79AC9915F987D8A8 (user_created_id), INDEX IDX_79AC9915316B011F (user_updated_id), INDEX IDX_79AC9915139DF194 (promotion_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE nature_demande (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, concours INT DEFAULT NULL, rapport INT DEFAULT NULL, rapport_ordre INT DEFAULT NULL, active INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE psituation (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) DEFAULT NULL, abrevation VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pstatut (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, table0 VARCHAR(255) DEFAULT NULL, phase0 VARCHAR(255) DEFAULT NULL, visible INT DEFAULT NULL, visible_admission INT DEFAULT NULL, next VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, anuller INT DEFAULT NULL, export_student_space INT DEFAULT NULL, export_stage INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tadmission (id INT AUTO_INCREMENT NOT NULL, statut_id INT DEFAULT NULL, preinscription_id INT DEFAULT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, fermer SMALLINT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_E9A5B70F6203804 (statut_id), INDEX IDX_E9A5B708337288 (preinscription_id), INDEX IDX_E9A5B70F987D8A8 (user_created_id), INDEX IDX_E9A5B70316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tetudiant (id INT AUTO_INCREMENT NOT NULL, st_famille_id INT DEFAULT NULL, st_famille_parent_id INT DEFAULT NULL, statut_id INT DEFAULT NULL, nature_demande_id INT DEFAULT NULL, type_bac_id INT DEFAULT NULL, academie_id INT DEFAULT NULL, langue_concours_id INT DEFAULT NULL, filiere_id INT DEFAULT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, url_image VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, date_naissance DATE DEFAULT NULL, lieu_naissance VARCHAR(255) DEFAULT NULL, sexe VARCHAR(10) DEFAULT NULL, nationalite VARCHAR(100) DEFAULT NULL, cin VARCHAR(100) DEFAULT NULL, passeport VARCHAR(100) DEFAULT NULL, adresse LONGTEXT DEFAULT NULL, ville VARCHAR(100) DEFAULT NULL, tel1 VARCHAR(255) DEFAULT NULL, tel2 VARCHAR(255) DEFAULT NULL, tel3 VARCHAR(255) DEFAULT NULL, mail1 VARCHAR(255) DEFAULT NULL, mail2 VARCHAR(255) DEFAULT NULL, nom_pere VARCHAR(255) DEFAULT NULL, prenom_pere VARCHAR(255) DEFAULT NULL, nationalite_pere VARCHAR(255) DEFAULT NULL, profession_pere VARCHAR(255) DEFAULT NULL, employe_pere VARCHAR(255) DEFAULT NULL, categorie_pere VARCHAR(255) DEFAULT NULL, tel_pere VARCHAR(255) DEFAULT NULL, mail_pere VARCHAR(255) DEFAULT NULL, salaire_pere VARCHAR(255) DEFAULT NULL, nom_mere VARCHAR(255) DEFAULT NULL, prenom_mere VARCHAR(255) DEFAULT NULL, nationalite_mere VARCHAR(255) DEFAULT NULL, profession_mere VARCHAR(255) DEFAULT NULL, employe_mere VARCHAR(255) DEFAULT NULL, categorie_mere VARCHAR(255) DEFAULT NULL, tel_mere VARCHAR(255) DEFAULT NULL, mail_mere VARCHAR(255) DEFAULT NULL, salaire_mere VARCHAR(255) DEFAULT NULL, cne VARCHAR(255) DEFAULT NULL, annee_bac VARCHAR(255) DEFAULT NULL, moyenne_bac VARCHAR(255) DEFAULT NULL, concours_medbup VARCHAR(255) DEFAULT NULL, obs LONGTEXT DEFAULT NULL, categorie_preinscription VARCHAR(255) DEFAULT NULL, frais_preinscription VARCHAR(255) DEFAULT NULL, bourse VARCHAR(255) DEFAULT NULL, logement VARCHAR(50) DEFAULT NULL, parking VARCHAR(50) DEFAULT NULL, actif VARCHAR(20) DEFAULT NULL, nombre_enfants VARCHAR(11) DEFAULT NULL, categorie_liste VARCHAR(100) DEFAULT NULL, admission_liste VARCHAR(100) DEFAULT NULL, tele_liste VARCHAR(100) DEFAULT NULL, statut_deliberation VARCHAR(255) DEFAULT NULL, active SMALLINT DEFAULT NULL, cpgem SMALLINT DEFAULT NULL, cpge1 SMALLINT DEFAULT NULL, cpge2 SMALLINT DEFAULT NULL, vet SMALLINT DEFAULT NULL, cam SMALLINT DEFAULT NULL, ist SMALLINT DEFAULT NULL, ip SMALLINT DEFAULT NULL, fpa SMALLINT DEFAULT NULL, fda SMALLINT DEFAULT NULL, fma SMALLINT DEFAULT NULL, source_site SMALLINT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_5F1A7BFDB06DD653 (st_famille_id), INDEX IDX_5F1A7BFD7F46960 (st_famille_parent_id), INDEX IDX_5F1A7BFDF6203804 (statut_id), INDEX IDX_5F1A7BFD6C97ED8F (nature_demande_id), INDEX IDX_5F1A7BFDC3E87EF8 (type_bac_id), INDEX IDX_5F1A7BFDB38A0D28 (academie_id), INDEX IDX_5F1A7BFDFDFFF0BC (langue_concours_id), INDEX IDX_5F1A7BFD180AA129 (filiere_id), INDEX IDX_5F1A7BFDF987D8A8 (user_created_id), INDEX IDX_5F1A7BFD316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tpreinscription (id INT AUTO_INCREMENT NOT NULL, statut_id INT DEFAULT NULL, etudiant_id INT NOT NULL, statut_deliberation_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, inscription_valide SMALLINT DEFAULT NULL, rang_p INT DEFAULT NULL, rang_s INT NOT NULL, categorie_liste VARCHAR(100) DEFAULT NULL, admission_liste VARCHAR(255) DEFAULT NULL, tele_liste VARCHAR(100) DEFAULT NULL, active SMALLINT DEFAULT NULL, mentionner_admissible SMALLINT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_EED29A80F6203804 (statut_id), INDEX IDX_EED29A80DDEAB1A3 (etudiant_id), INDEX IDX_EED29A8095B0C43E (statut_deliberation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE xacademie (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE xfiliere (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE xlangue (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE xtype_bac (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ac_annee ADD CONSTRAINT FK_2655A1C4F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_annee ADD CONSTRAINT FK_2655A1C4316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_annee ADD CONSTRAINT FK_2655A1C45200282E FOREIGN KEY (formation_id) REFERENCES ac_formation (id)');
        $this->addSql('ALTER TABLE ac_departement ADD CONSTRAINT FK_974E8EFAF987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_departement ADD CONSTRAINT FK_974E8EFA316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_departement ADD CONSTRAINT FK_974E8EFAFF631228 FOREIGN KEY (etablissement_id) REFERENCES ac_etablissement (id)');
        $this->addSql('ALTER TABLE ac_element ADD CONSTRAINT FK_E86BDA74F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_element ADD CONSTRAINT FK_E86BDA74316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_element ADD CONSTRAINT FK_E86BDA74AFC2B591 FOREIGN KEY (module_id) REFERENCES ac_module (id)');
        $this->addSql('ALTER TABLE ac_epreuve ADD CONSTRAINT FK_7F866032F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_epreuve ADD CONSTRAINT FK_7F866032316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_etablissement ADD CONSTRAINT FK_76C7181CF987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_etablissement ADD CONSTRAINT FK_76C7181C316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_formation ADD CONSTRAINT FK_EF42FEE5F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_formation ADD CONSTRAINT FK_EF42FEE5316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_formation ADD CONSTRAINT FK_EF42FEE5FF631228 FOREIGN KEY (etablissement_id) REFERENCES ac_etablissement (id)');
        $this->addSql('ALTER TABLE ac_module ADD CONSTRAINT FK_9B0E38C4F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_module ADD CONSTRAINT FK_9B0E38C4316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_module ADD CONSTRAINT FK_9B0E38C45577AFDB FOREIGN KEY (semestre_id) REFERENCES ac_semestre (id)');
        $this->addSql('ALTER TABLE ac_promotion ADD CONSTRAINT FK_6E1FA28B5200282E FOREIGN KEY (formation_id) REFERENCES ac_formation (id)');
        $this->addSql('ALTER TABLE ac_promotion ADD CONSTRAINT FK_6E1FA28BF987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_promotion ADD CONSTRAINT FK_6E1FA28B316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_semestre ADD CONSTRAINT FK_79AC9915F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_semestre ADD CONSTRAINT FK_79AC9915316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE ac_semestre ADD CONSTRAINT FK_79AC9915139DF194 FOREIGN KEY (promotion_id) REFERENCES ac_promotion (id)');
        $this->addSql('ALTER TABLE tadmission ADD CONSTRAINT FK_E9A5B70F6203804 FOREIGN KEY (statut_id) REFERENCES pstatut (id)');
        $this->addSql('ALTER TABLE tadmission ADD CONSTRAINT FK_E9A5B708337288 FOREIGN KEY (preinscription_id) REFERENCES tpreinscription (id)');
        $this->addSql('ALTER TABLE tadmission ADD CONSTRAINT FK_E9A5B70F987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE tadmission ADD CONSTRAINT FK_E9A5B70316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDB06DD653 FOREIGN KEY (st_famille_id) REFERENCES psituation (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFD7F46960 FOREIGN KEY (st_famille_parent_id) REFERENCES psituation (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDF6203804 FOREIGN KEY (statut_id) REFERENCES pstatut (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFD6C97ED8F FOREIGN KEY (nature_demande_id) REFERENCES nature_demande (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDC3E87EF8 FOREIGN KEY (type_bac_id) REFERENCES xtype_bac (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDB38A0D28 FOREIGN KEY (academie_id) REFERENCES xacademie (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDFDFFF0BC FOREIGN KEY (langue_concours_id) REFERENCES xlangue (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFD180AA129 FOREIGN KEY (filiere_id) REFERENCES xfiliere (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFDF987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE tetudiant ADD CONSTRAINT FK_5F1A7BFD316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE tpreinscription ADD CONSTRAINT FK_EED29A80F6203804 FOREIGN KEY (statut_id) REFERENCES pstatut (id)');
        $this->addSql('ALTER TABLE tpreinscription ADD CONSTRAINT FK_EED29A80DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES tetudiant (id)');
        $this->addSql('ALTER TABLE tpreinscription ADD CONSTRAINT FK_EED29A8095B0C43E FOREIGN KEY (statut_deliberation_id) REFERENCES pstatut (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ac_departement DROP FOREIGN KEY FK_974E8EFAFF631228');
        $this->addSql('ALTER TABLE ac_formation DROP FOREIGN KEY FK_EF42FEE5FF631228');
        $this->addSql('ALTER TABLE ac_annee DROP FOREIGN KEY FK_2655A1C45200282E');
        $this->addSql('ALTER TABLE ac_promotion DROP FOREIGN KEY FK_6E1FA28B5200282E');
        $this->addSql('ALTER TABLE ac_element DROP FOREIGN KEY FK_E86BDA74AFC2B591');
        $this->addSql('ALTER TABLE ac_semestre DROP FOREIGN KEY FK_79AC9915139DF194');
        $this->addSql('ALTER TABLE ac_module DROP FOREIGN KEY FK_9B0E38C45577AFDB');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFD6C97ED8F');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDB06DD653');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFD7F46960');
        $this->addSql('ALTER TABLE tadmission DROP FOREIGN KEY FK_E9A5B70F6203804');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDF6203804');
        $this->addSql('ALTER TABLE tpreinscription DROP FOREIGN KEY FK_EED29A80F6203804');
        $this->addSql('ALTER TABLE tpreinscription DROP FOREIGN KEY FK_EED29A8095B0C43E');
        $this->addSql('ALTER TABLE tpreinscription DROP FOREIGN KEY FK_EED29A80DDEAB1A3');
        $this->addSql('ALTER TABLE tadmission DROP FOREIGN KEY FK_E9A5B708337288');
        $this->addSql('ALTER TABLE ac_annee DROP FOREIGN KEY FK_2655A1C4F987D8A8');
        $this->addSql('ALTER TABLE ac_annee DROP FOREIGN KEY FK_2655A1C4316B011F');
        $this->addSql('ALTER TABLE ac_departement DROP FOREIGN KEY FK_974E8EFAF987D8A8');
        $this->addSql('ALTER TABLE ac_departement DROP FOREIGN KEY FK_974E8EFA316B011F');
        $this->addSql('ALTER TABLE ac_element DROP FOREIGN KEY FK_E86BDA74F987D8A8');
        $this->addSql('ALTER TABLE ac_element DROP FOREIGN KEY FK_E86BDA74316B011F');
        $this->addSql('ALTER TABLE ac_epreuve DROP FOREIGN KEY FK_7F866032F987D8A8');
        $this->addSql('ALTER TABLE ac_epreuve DROP FOREIGN KEY FK_7F866032316B011F');
        $this->addSql('ALTER TABLE ac_etablissement DROP FOREIGN KEY FK_76C7181CF987D8A8');
        $this->addSql('ALTER TABLE ac_etablissement DROP FOREIGN KEY FK_76C7181C316B011F');
        $this->addSql('ALTER TABLE ac_formation DROP FOREIGN KEY FK_EF42FEE5F987D8A8');
        $this->addSql('ALTER TABLE ac_formation DROP FOREIGN KEY FK_EF42FEE5316B011F');
        $this->addSql('ALTER TABLE ac_module DROP FOREIGN KEY FK_9B0E38C4F987D8A8');
        $this->addSql('ALTER TABLE ac_module DROP FOREIGN KEY FK_9B0E38C4316B011F');
        $this->addSql('ALTER TABLE ac_promotion DROP FOREIGN KEY FK_6E1FA28BF987D8A8');
        $this->addSql('ALTER TABLE ac_promotion DROP FOREIGN KEY FK_6E1FA28B316B011F');
        $this->addSql('ALTER TABLE ac_semestre DROP FOREIGN KEY FK_79AC9915F987D8A8');
        $this->addSql('ALTER TABLE ac_semestre DROP FOREIGN KEY FK_79AC9915316B011F');
        $this->addSql('ALTER TABLE tadmission DROP FOREIGN KEY FK_E9A5B70F987D8A8');
        $this->addSql('ALTER TABLE tadmission DROP FOREIGN KEY FK_E9A5B70316B011F');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDF987D8A8');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFD316B011F');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDB38A0D28');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFD180AA129');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDFDFFF0BC');
        $this->addSql('ALTER TABLE tetudiant DROP FOREIGN KEY FK_5F1A7BFDC3E87EF8');
        $this->addSql('DROP TABLE ac_annee');
        $this->addSql('DROP TABLE ac_departement');
        $this->addSql('DROP TABLE ac_element');
        $this->addSql('DROP TABLE ac_epreuve');
        $this->addSql('DROP TABLE ac_etablissement');
        $this->addSql('DROP TABLE ac_formation');
        $this->addSql('DROP TABLE ac_module');
        $this->addSql('DROP TABLE ac_promotion');
        $this->addSql('DROP TABLE ac_semestre');
        $this->addSql('DROP TABLE nature_demande');
        $this->addSql('DROP TABLE psituation');
        $this->addSql('DROP TABLE pstatut');
        $this->addSql('DROP TABLE tadmission');
        $this->addSql('DROP TABLE tetudiant');
        $this->addSql('DROP TABLE tpreinscription');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE xacademie');
        $this->addSql('DROP TABLE xfiliere');
        $this->addSql('DROP TABLE xlangue');
        $this->addSql('DROP TABLE xtype_bac');
    }
}

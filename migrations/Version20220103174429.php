<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220103174429 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE porganisme (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(255) DEFAULT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tinscription (id INT AUTO_INCREMENT NOT NULL, statut_id INT DEFAULT NULL, organisme_id INT DEFAULT NULL, admission_id INT DEFAULT NULL, annee_id INT DEFAULT NULL, promotion_id INT DEFAULT NULL, user_created_id INT DEFAULT NULL, user_updated_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, code_anonymat VARCHAR(255) DEFAULT NULL, code_anonymat_rat VARCHAR(255) DEFAULT NULL, reserve SMALLINT DEFAULT NULL, motif VARCHAR(255) DEFAULT NULL, emplacement INT NOT NULL, type_cand VARCHAR(50) DEFAULT NULL, active SMALLINT DEFAULT NULL, created DATETIME DEFAULT NULL, updated DATETIME DEFAULT NULL, INDEX IDX_698E3BDEF6203804 (statut_id), INDEX IDX_698E3BDE5DDD38F5 (organisme_id), INDEX IDX_698E3BDE75C9C554 (admission_id), INDEX IDX_698E3BDE543EC5F0 (annee_id), INDEX IDX_698E3BDE139DF194 (promotion_id), INDEX IDX_698E3BDEF987D8A8 (user_created_id), INDEX IDX_698E3BDE316B011F (user_updated_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDEF6203804 FOREIGN KEY (statut_id) REFERENCES pstatut (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDE5DDD38F5 FOREIGN KEY (organisme_id) REFERENCES porganisme (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDE75C9C554 FOREIGN KEY (admission_id) REFERENCES tadmission (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDE543EC5F0 FOREIGN KEY (annee_id) REFERENCES ac_annee (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDE139DF194 FOREIGN KEY (promotion_id) REFERENCES ac_promotion (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDEF987D8A8 FOREIGN KEY (user_created_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE tinscription ADD CONSTRAINT FK_698E3BDE316B011F FOREIGN KEY (user_updated_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE psituation CHANGE abrevation abreviation VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE pstatut DROP export_student_space, DROP export_stage');
        $this->addSql('ALTER TABLE tetudiant ADD eia SMALLINT DEFAULT NULL');
        $this->addSql('ALTER TABLE tpreinscription ADD annee_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tpreinscription ADD CONSTRAINT FK_EED29A80543EC5F0 FOREIGN KEY (annee_id) REFERENCES ac_annee (id)');
        $this->addSql('CREATE INDEX IDX_EED29A80543EC5F0 ON tpreinscription (annee_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tinscription DROP FOREIGN KEY FK_698E3BDE5DDD38F5');
        $this->addSql('DROP TABLE porganisme');
        $this->addSql('DROP TABLE tinscription');
        $this->addSql('ALTER TABLE psituation CHANGE abreviation abrevation VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE pstatut ADD export_student_space INT DEFAULT NULL, ADD export_stage INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tetudiant DROP eia');
        $this->addSql('ALTER TABLE tpreinscription DROP FOREIGN KEY FK_EED29A80543EC5F0');
        $this->addSql('DROP INDEX IDX_EED29A80543EC5F0 ON tpreinscription');
        $this->addSql('ALTER TABLE tpreinscription DROP annee_id');
    }
}

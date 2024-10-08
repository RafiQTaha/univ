const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    .addEntry('login', './assets/components/login/login.js')
    
    .addEntry('etudiant', './assets/components/etudiant/etudiant.js')
    .addEntry('rechercheavance', './assets/components/etudiant/rechercheavance.js')
    .addEntry('centreappel', './assets/components/etudiant/centre_appel.js')

    .addEntry('conseil_disciplinaire', './assets/components/conseil/conseil_disciplinaire.js')

    .addEntry('preinscription', './assets/components/preinscription/preinscription.js')
    .addEntry('gestionPreinscription', './assets/components/preinscription/gestionpreinscription.js')

    .addEntry('admission', './assets/components/admission/admissions.js')
    .addEntry('gestionadmission', './assets/components/admission/gestionadmission.js')

    .addEntry('gestionGroupe', './assets/components/inscription/gestiongroupe.js')
    .addEntry('inscription', './assets/components/inscription/gestioninscription.js')

    .addEntry('facture', './assets/components/facture/facture.js')
    .addEntry('bordereau', './assets/components/facture/bordereau.js')
    .addEntry('reglement', './assets/components/facture/reglement.js')

    .addEntry('epreuve', './assets/components/administration/epreuve.js')
    .addEntry('impression', './assets/components/administration/impression.js')
    .addEntry('etat_impression', './assets/components/administration/etat_impression.js')
    .addEntry('imprimer', './assets/components/administration/imprimer.js')
    .addEntry('controle', './assets/components/administration/controle.js')
    .addEntry('note', './assets/components/administration/note.js')
    
    .addEntry('impression_concours', './assets/components/concours/impression.js')
    .addEntry('imprimer_concours', './assets/components/concours/imprimer.js')
    .addEntry('controle_concours', './assets/components/concours/controle.js')
    .addEntry('etat_impression_concours', './assets/components/concours/etat_impression.js')
    .addEntry('evaluation_concours', './assets/components/concours/evaluation.js')

    .addEntry('evaluationAnnee', './assets/components/evaluation/annee.js')
    .addEntry('evaluationElement', './assets/components/evaluation/element.js')
    .addEntry('evaluationEpreuve', './assets/components/evaluation/epreuve.js')
    .addEntry('evaluationModule', './assets/components/evaluation/module.js')
    .addEntry('evaluationFormation', './assets/components/evaluation/formation.js')
    .addEntry('evaluationSemestre', './assets/components/evaluation/semestre.js')
    .addEntry('evaluationSimulationDeliberation', './assets/components/evaluation/simulationdeliberation.js')
    .addEntry('evaluationPv', './assets/components/evaluation/pv.js')
    
    .addEntry('gestionPlanification', './assets/components/planification/gestion_planification.js')
    .addEntry('planification', './assets/components/planification/planification.js')

    .addEntry('creationBordereaux', './assets/components/honoraire/creation_borderaux.js')
    .addEntry('generationHonoraire', './assets/components/honoraire/generation_honoraire.js')
    .addEntry('gestionBorderaux', './assets/components/honoraire/gestion_borderaux.js')
    .addEntry('gestionHonoraire', './assets/components/honoraire/gestion_honoraire.js')

    .addEntry('etablissement', './assets/components/parametre/etablissement.js')
    .addEntry('module', './assets/components/parametre/module.js')
    .addEntry('element', './assets/components/parametre/element.js')
    .addEntry('programmation', './assets/components/parametre/programmation.js')
    .addEntry('formation', './assets/components/parametre/formation.js')
    .addEntry('promotion', './assets/components/parametre/promotion.js')
    .addEntry('annee', './assets/components/parametre/annee.js')
    .addEntry('semestre', './assets/components/parametre/semestre.js')
    .addEntry('user', './assets/components/parametre/user.js')
    .addEntry('enseignant', './assets/components/parametre/enseignant.js')
    .addEntry('salles', './assets/components/parametre/salles.js')
    .addEntry('enseignantexcept', './assets/components/parametre/enseignantexcept.js')
    .addEntry('frais', './assets/components/parametre/frais.js')
    .addEntry('academie', './assets/components/parametre/academie.js')
    .addEntry('banque', './assets/components/parametre/banque.js')
    .addEntry('filiere', './assets/components/parametre/filiere.js')
    .addEntry('langue', './assets/components/parametre/langue.js')
    .addEntry('modalites', './assets/components/parametre/modalites.js')
    .addEntry('serieBac', './assets/components/parametre/serieBac.js')
    .addEntry('typeBac', './assets/components/parametre/typeBac.js')
    .addEntry('semaines', './assets/components/parametre/semaines.js')


    // .addStyleEntry('login', './assets/styles/components/login/login.scss')
    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()
   
;

module.exports = Encore.getWebpackConfig();

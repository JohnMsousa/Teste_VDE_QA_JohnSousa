import LoginPage from "../../pages/LoginPage";
import QuestoesPage from "../../pages/QuestoesPage";

describe("Responder Questão", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
        QuestoesPage.navegarParaQuestoes();
    });

    it("deve responder questão Constitucional - alternativa A", () => {
        QuestoesPage.verificarQuestaoVisivel("Constitucional", "Fenômeno recente do Direito brasileiro");
        QuestoesPage.selecionarQuestao("ADPF 635 e ADPF 347");
        QuestoesPage.responderQuestao();
        QuestoesPage.verificarRespostaCorreta();
    });
});

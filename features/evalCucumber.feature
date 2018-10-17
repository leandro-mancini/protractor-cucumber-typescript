#language: pt

Funcionalidade: Gerar escala

    Cenário: Adicionar escala padrão
        Dado estou na página inicial "Escala Globus7"
        Quando clico no menu filtros
        E seleciono a data de amanhã
        Então clico no botão confirmar
        Quando devo selecionar o tipo de dia "Dias úteis"
        E devo expandir uma filial
        E devo selecionar uma linha
        Então devo clicar no botão confirmar

    Cenário: Gerando uma escala adicionada
        Dado que eu esteja na página de serviços de escala
        Quando devo clicar no botão gerar escala
        Então devo visualizar minha escala gerada
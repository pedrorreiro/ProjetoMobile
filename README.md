# ProjetoMobile

Esse projeto foi desenvolvido para a avaliação da disiplina de Programação Mobile 2021/01. Era uma aplicação que permitia realizar reservas de espaços de um hotel, cadastrar espaços e ambientes.

A aplicação está bem incompleta, nela era utilizado ReactNative.

# Especificações do Projeto

Crie um protótipo e um aplicativo para dispositivo móvel compatível com Android e/ou iOS usando React-native para controlar reservas de ambientes de um condomínio (ex.: salão de festas, churrasqueiras, academia, etc.) atendendo os seguintes requisitos:

1. Deverá possuir controle de login (cadastro e autenticação de usuários). Pode-se utilizar o módulo Firebase Authentication para realizar o cadastro/autenticação de usuários;
2. Deverá ter três tabelas no banco de dados: Ambiente (nome espaço, descrição, lotação_máxima), Reserva (data, id_login), Morador (id_login, nome_completo, apartamento). Caso necessário, mais atributos podem ser adicionados às tabelas.
3. Deverá contemplar dois tipos de usuários: administrador e morador.
  a. Usuário administrador: esse perfil deverá estar atribuído a um único login que poderá cadastrar, alterar, visualizar e excluir os ambientes do condomínio, e        poderá visualizar todas as reservas realizadas pelos moradores organizadas por ambiente;
  b. Usuário morador: esse perfil poderá realizar a reserva de um ambiente e, caso em tempo, realizar o cancelamento de uma reserva por ele realizada.
4. Caso necessário, faça o pré-cadastramento de dados que tenham relação com a regra de negócio proposta neste tipo de aplicação;
5. Faça a persistência de dados usando o Firebase considerando a regra de negócio da aplicação;
6. O aplicativo deve apresentar interfaces (telas) que possibilitem a inserção, visualização, edição e exclusão de ambientes do condomínio e a realização e            cancelamento de reservas dos ambientes;
7. Utilize caixa de diálogo (Alert) para confirmar a ação de exclusão de dados persistidos na base de dados;
8. Deve-se criar e utilizar no mínimo 3 (três) componentes de interface (ex.: cards, barras de navegação, etc.) com estilização;
9. A rolagem da lista de ambientes e reservas deve ser realizada utilizando carregamento dinâmico com FlastList;
10. Utilize barra de navegação como, por exemplo, drawer-navigation, BottomNavigation ou TabNavigation para que o usuário possa navegar entre as diferentes telas       da aplicação;
11. Utilize o REDUX para a centralização de estados da aplicação;
12. Aplicação de no mínimo 10 heurísticas de UX (ver vídeos 50 heurísticas de UX no Moodle);
13. Todos os nomes de variáveis, constantes, classes, métodos, atributos e comentários desenvolvidos pelo aluno devem utilizar termos em português (ex.:                 listarMoradores(), lotacaoMaxima, /*Esta classe determina...*/, etc.).

Deve-se utilizar:

• React-native / Expo (versão 0.60.0 ou superior);
• Android SDK 9 - API Level 28 - (Android Pie) ou superior;
• Google Firebase para persistência de dados;
• Redux para centralização de estados da aplicação.

/**
 * Mapeamento das siglas dos estados para seus nomes completos em minúsculas.
 */
const stateMap = {
    AC: 'acre',
    AL: 'alagoas',
    AP: 'amapa',
    AM: 'amazonas',
    BA: 'bahia',
    CE: 'ceara',
    DF: 'distrito-federal',
    ES: 'espirito-santo',
    GO: 'goias',
    MA: 'maranhao',
    MT: 'mato-grosso',
    MS: 'mato-grosso-do-sul',
    MG: 'minas-gerais',
    PA: 'para',
    PB: 'paraiba',
    PR: 'parana',
    PE: 'pernambuco',
    PI: 'piaui',
    RJ: 'rio-de-janeiro',
    RN: 'rio-grande-do-norte',
    RS: 'rio-grande-do-sul',
    RO: 'rondonia',
    RR: 'roraima',
    SC: 'santa-catarina',
    SP: 'sao-paulo',
    SE: 'sergipe',
    TO: 'tocantins'
  };
  
  /**
   * Gera um slug a partir do nome da cidade.
   * @param {string} cityName - Nome da cidade.
   * @returns {string} - Slug gerado.
   */
  function generateSlug(cityName) {
    return cityName
      .normalize('NFD') // Decompõe caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
      .toLowerCase() // Converte para minúsculas
      .trim() // Remove espaços no início e no fim
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/[^a-z0-9-]/g, ''); // Remove caracteres inválidos
  }
  
  /**
   * Transforma uma string CSV de cidades em uma lista de objetos JSON com cidadeId, slug e state.
   * @param {string} csvData - String contendo os dados CSV.
   * @returns {Array<Object>} - Lista de objetos JSON transformados.
   */
  function transformCitiesCSV(csvData) {
    const lines = csvData.trim().split('\n');
  
    // Verifica se há pelo menos uma linha de cabeçalho
    if (lines.length < 2) {
      throw new Error('O CSV deve conter pelo menos uma linha de cabeçalho e uma linha de dados.');
    }
  
    // Extrai os cabeçalhos e identifica as posições das colunas
    const headers = lines[0].split(',').map(header => header.trim());
    const cidadeIdIndex = headers.indexOf('cidadeId');
    const cidadeNameIndex = headers.indexOf('cidadeName');
    const estadoIndex = headers.indexOf('estado');
  
    if (cidadeIdIndex === -1 || cidadeNameIndex === -1 || estadoIndex === -1) {
      throw new Error('O CSV deve conter as colunas "cidadeId", "cidadeName" e "estado".');
    }
  
    const result = [];
  
    // Processa cada linha de dados
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
  
      // Ignora linhas vazias
      if (!line) continue;
  
      // Divide a linha em colunas
      const columns = line.split(',').map(col => col.trim());
  
      // Valida se a linha possui o número correto de colunas
      if (columns.length !== headers.length) {
        console.warn(`Linha ${i + 1} ignorada devido ao número incorreto de colunas.`);
        continue;
      }
  
      const cidadeId = parseInt(columns[cidadeIdIndex], 10);
      const cidadeName = columns[cidadeNameIndex];
      const estadoAbbr = columns[estadoIndex].toUpperCase();
  
      // Valida os dados
      if (isNaN(cidadeId) || !cidadeName || !estadoAbbr) {
        console.warn(`Linha ${i + 1} ignorada devido a dados inválidos.`);
        continue;
      }
  
      // Mapeia a sigla do estado para o nome completo
      const state = stateMap[estadoAbbr];
      if (!state) {
        console.warn(`Linha ${i + 1} ignorada devido à sigla de estado inválida: "${estadoAbbr}".`);
        continue;
      }
  
      // Gera o slug
      const slug = generateSlug(cidadeName);
  
      // Adiciona o objeto transformado ao resultado
      result.push({
        cidadeId,
        slug,
        state
      });
    }
  
    return result;
  }
  
  // 📌 **Exemplo de Uso:**
  
  const csvInput = `
  cidadeId,cidadeName,estado
  274,Abaiara,CE
  106,Abreu e Lima,PE
  217,Acarape,CE
  28,Acaraú,CE
  45,Acopiara,CE
  177,Água Nova,RN
  187,Aiuaba,CE
  151,Alagoinhas,BA
  275,Alcantaras,CE
  182,Alexandria,RN
  178,Altaneira,CE
  116,Altos,PI
  174,Antonina do Norte,CE
  219,Apodi,RN
  186,Apuiarés,CE
  210,Aquiraz,CE
  114,Aracaju,SE
  202,Aracati,CE
  263,Aracoiaba,CE
  109,Arapiraca,AL
  204,Arara,PB
  131,Araripina,PE
  88,Arcoverde,PE
  75,Assu,RN
  230,Aurora,CE
  36,Banabuiú,CE
  77,Baraúna,RN
  11,Barbalha,CE
  161,Barra dos Coqueiros,SE
  179,Barro,CE
  242,Barroquinha,CE
  59,Bayeux,PB
  194,Bela Cruz,CE
  85,Belo Jardim,PE
  89,Bezerros,PE
  164,Boa Viagem,CE
  101,Brejo da Madre de Deus,PE
  35,Brejo Santo,CE
  243,Buriti dos Montes,PI
  60,Cabedelo,PB
  105,Cabo de Santo Agostinho,PE
  231,Caetano Pereiro,CE
  183,Caiçara do Rio do Vento,RN
  74,Caicó,RN
  64,Cajazeiras,PB
  146,Camaçari,BA
  127,Camaragibe,PE
  226,Camocim,CE
  14,Campina Grande,PB
  119,Campo Maior,PI
  195,Campos Sales,CE
  193,Canindé,CE
  154,Caninde de São Francisco,SE
  264,Caridade,CE
  197,Caririaçu,CE
  244,Carnaubal,CE
  87,Caruaru,PE
  102,Cascavel,CE
  67,Catolé do Rocha,PB
  150,Catu,BA
  265,Catunda,CE
  120,Caucaia,CE
  276,CEARA MIRIM,RN
  98,Ceará-Mirim,RN
  38,Cedro,CE
  220,Chorozinho,CE
  181,Conde,PB
  184,Coreaú,CE
  5,Coronel João Pessoa,RN
  31,Crateús,CE
  9,Crato,CE
  246,Croata,CE
  84,Custódia,PE
  140,Delmiro Gouveia,AL
  147,Dias D'Ávila,BA
  4,Doutor Severiano,RN
  82,Encanto,RN
  133,Escada,PE
  142,Estância,SE
  113,Eusébio,CE
  73,Extremoz,RN
  207,Farias Brito,CE
  156,Feira de Santana,BA
  234,Flecheiras São Gonçalo do Amarante,CE
  266,Forquilha,CE
  96,Fortaleza,CE
  247,Fortim,CE
  81,Francisco Dantas,RN
  200,Frutuoso Gomes,RN
  205,Gado Bravo,PB
  122,Garanhuns,PE
  252,Goianinha,RN
  267,Granja,CE
  90,Gravatá,PE
  236,Groaíras,CE
  221,Grossos,RN
  240,Guaiuba,CE
  20,Guaraciaba do Norte,CE
  21,Horizonte,CE
  248,Hugo Napoleão,PI
  268,Ibaretama,CE
  27,Ibiapina,CE
  46,Icó,CE
  125,Igarassu,PE
  56,Iguatu,CE
  216,Ipaporanga,CE
  214,Ipaumirim,CE
  19,Ipu,CE
  253,Ipueiras,CE
  51,Iracema,CE
  138,Itabaiana,SE
  249,Itaiçaba,CE
  238,Itajá,RN
  17,Itapajé,CE
  32,Itapipoca,CE
  159,Jaboatão dos Guararapes,PE
  53,Jaguaretama,CE
  52,Jaguaribara,CE
  6,Jaguaribe,CE
  173,Jati,CE
  155,Jeremoabo,BA
  254,João Câmara,RN
  15,João Pessoa,PB
  79,José da Penha,RN
  152,Juazeiro,BA
  10,Juazeiro do Norte,CE
  166,Jucás,CE
  213,Jucurutu,RN
  139,Lagarto,SE
  37,Lavras da Mangabeira,CE
  148,Limoeiro,PE
  7,Limoeiro do Norte,CE
  129,Luis Correia,PI
  83,Luís Gomes,RN
  99,Macaíba,RN
  255,Macau,RN
  97,Maceió,AL
  78,Major Sales,RN
  103,Maracanaú,CE
  104,Maranguape,CE
  190,Marco,CE
  256,Marco,CE
  124,Marechal Deodoro,AL
  232,Mari,PB
  76,Martins,RN
  206,Massapê,CE
  191,Mauriti,CE
  229,Meruoca,CE
  12,Milagres,CE
  192,Milhã,CE
  42,Missão Velha,CE
  24,Mombaça,CE
  43,Morada Nova,CE
  269,Morrinhos,CE
  13,Mossoró,RN
  222,Mucambo,CE
  16,Natal,RN
  132,Nísia Floresta,RN
  136,Nossa Senhora do Socorro,SE
  237,Nova Cruz,RN
  208,Nova Olinda,CE
  180,Nova Russas,CE
  260,Olho d'água do Borges,RN
  158,Olinda,PE
  41,Orós,CE
  130,Ouricuri,PE
  22,Pacajus,CE
  134,Pacatuba,CE
  270,Pacoti,CE
  188,Pacujá,CE
  110,Palmeira dos Índios,AL
  257,Paracuru,CE
  273,Parada Zona Rural de São Gonçalo do Amarante,CE
  117,Paraipaba,CE
  123,Parnaíba,PI
  71,Parnamirim,RN
  239,Pascoal Pacajus,CE
  63,Patos,PB
  3,Pau dos Ferros,RN
  128,Paulista,PE
  153,Paulo Afonso,BA
  48,Pedra Branca,CE
  175,Penaforte,CE
  209,Pentecoste,CE
  1,Pereiro,CE
  86,Pesqueira,PE
  143,Petrolina,PE
  115,Picos,PI
  261,Pilões,PB
  250,Pio IX,PI
  168,Piquet Carneiro,CE
  218,Piranhas,AL
  137,Piripiri,PI
  58,Pombal,PB
  69,Portalegre,RN
  196,Porteiras,CE
  227,Potengi,CE
  162,Potiretama,CE
  108,Queimadas,PB
  49,Quixadá,CE
  47,Quixeramobim,CE
  39,Quixeré,CE
  68,Rafael Fernandes,RN
  201,Rafael Godeiro,RN
  118,Recife,PE
  145,Ribeira do Pombal,BA
  112,Rio Largo,AL
  55,Russas,CE
  189,Saboeiro,CE
  95,Salgueiro,PE
  93,Santa Cruz do Capibaribe,PE
  61,Santa Luzia,PB
  258,Santa Quitéria,CE
  57,Santa Rita,PB
  160,Santo Amaro,BA
  30,São Benedito,CE
  66,São Bento,PB
  149,São Cristovão,SE
  72,São Gonçalo do Amarante,RN
  100,São José de Mipibu,RN
  126,São Lourenço da Mata,PE
  2,São Miguel,RN
  135,São Miguel dos Campos,AL
  259,Sapé,PB
  228,Senador Georgino Avelino,RN
  50,Senador Pompeu,CE
  91,Serra Talhada,PE
  157,Simões Filho,BA
  34,Sobral,CE
  62,Sousa,PB
  144,Surubim,PE
  199,Taboleiro Grande,RN
  54,Tabuleiro do Norte,CE
  251,Taipu,RN
  215,Tamboril,CE
  33,Tauá,CE
  111,Teresina,PI
  29,Tianguá,CE
  121,Timon,MA
  141,Tobias Barreto,SE
  94,Toritama,PE
  233,Trindade Pereiro,CE
  26,Ubajara,CE
  65,Uirauna,PB
  235,Umari Pacajus,CE
  80,Umarizal,RN
  271,Umirim,CE
  262,Upanema,RN
  272,Uruburetama,CE
  212,Varjota,CE
  40,Várzea Alegre,CE
  8,Venha Ver,RN
  23,Viçosa do Ceará,CE
  92,Vitoria de Santo Antão,PE
  `;
  
  /**
   * Gera um slug a partir do nome da cidade.
   * @param {string} cityName - Nome da cidade.
   * @returns {string} - Slug gerado.
   */
  function generateSlug(cityName) {
    return cityName
      .normalize('NFD') // Decompõe caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
      .toLowerCase() // Converte para minúsculas
      .trim() // Remove espaços no início e no fim
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/[^a-z0-9-]/g, ''); // Remove caracteres inválidos
  }
  
  /**
   * Transforma uma string CSV de cidades em uma lista de objetos JSON com cidadeId, slug e state.
   * @param {string} csvData - String contendo os dados CSV.
   * @returns {Array<Object>} - Lista de objetos JSON transformados.
   */
  function transformCitiesCSV(csvData) {
    const lines = csvData.trim().split('\n');
  
    // Verifica se há pelo menos uma linha de cabeçalho
    if (lines.length < 2) {
      throw new Error('O CSV deve conter pelo menos uma linha de cabeçalho e uma linha de dados.');
    }
  
    // Extrai os cabeçalhos e identifica as posições das colunas
    const headers = lines[0].split(',').map(header => header.trim());
    const cidadeIdIndex = headers.indexOf('cidadeId');
    const cidadeNameIndex = headers.indexOf('cidadeName');
    const estadoIndex = headers.indexOf('estado');
  
    if (cidadeIdIndex === -1 || cidadeNameIndex === -1 || estadoIndex === -1) {
      throw new Error('O CSV deve conter as colunas "cidadeId", "cidadeName" e "estado".');
    }
  
    const result = [];
  
    // Processa cada linha de dados
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
  
      // Ignora linhas vazias
      if (!line) continue;
  
      // Divide a linha em colunas
      const columns = line.split(',').map(col => col.trim());
  
      // Valida se a linha possui o número correto de colunas
      if (columns.length !== headers.length) {
        console.warn(`Linha ${i + 1} ignorada devido ao número incorreto de colunas.`);
        continue;
      }
  
      const cidadeId = parseInt(columns[cidadeIdIndex], 10);
      const cidadeName = columns[cidadeNameIndex];
      const estadoAbbr = columns[estadoIndex].toUpperCase();
  
      // Valida os dados
      if (isNaN(cidadeId) || !cidadeName || !estadoAbbr) {
        console.warn(`Linha ${i + 1} ignorada devido a dados inválidos.`);
        continue;
      }
  
      // Mapeia a sigla do estado para o nome completo
      const state = stateMap[estadoAbbr];
      if (!state) {
        console.warn(`Linha ${i + 1} ignorada devido à sigla de estado inválida: "${estadoAbbr}".`);
        continue;
      }
  
      // Gera o slug
      const slug = generateSlug(cidadeName);
  
      // Adiciona o objeto transformado ao resultado
      result.push({
        id: cidadeId,
        slug,
        state,
        name: cidadeName
      });
    }
  
    return result;
  }
  
  // 📌 **Exemplo de Uso:**
  
  const transformedCities = transformCitiesCSV(csvInput);
  
  // Exibindo o resultado no console (opcional)
  console.log(JSON.stringify(transformedCities, null, 2));
  
  /*
  📄 **Saída Esperada (Exemplo):**
  [
    {
      "cidadeId": 274,
      "slug": "abaiara",
      "state": "ceara"
    },
    {
      "cidadeId": 106,
      "slug": "abreu-e-lima",
      "state": "pernambuco"
    },
    {
      "cidadeId": 217,
      "slug": "acarape",
      "state": "ceara"
    },
    {
      "cidadeId": 28,
      "slug": "acarau",
      "state": "ceara"
    },
    {
      "cidadeId": 45,
      "slug": "acopiara",
      "state": "ceara"
    },
    {
      "cidadeId": 177,
      "slug": "agua-nova",
      "state": "rio-grande-do-norte"
    },
    {
      "cidadeId": 187,
      "slug": "aiuaba",
      "state": "ceara"
    },
    {
      "cidadeId": 151,
      "slug": "alagoinhas",
      "state": "bahia"
    },
    // ... outras cidades transformadas
  ]
  */
  
  // Exibindo o resultado
  console.log(require('fs').writeFileSync('public/cities.json', JSON.stringify(transformedCities, null, 2)));
  
  /*
  📄 **Saída Esperada (Exemplo):**
  [
    {
      "cidadeId": 274,
      "slug": "abaiara",
      "state": "CE"
    },
    {
      "cidadeId": 106,
      "slug": "abreu-e-lima",
      "state": "PE"
    },
    {
      "cidadeId": 217,
      "slug": "acarape",
      "state": "CE"
    },
    {
      "cidadeId": 28,
      "slug": "acarau",
      "state": "CE"
    },
    {
      "cidadeId": 45,
      "slug": "acopiara",
      "state": "CE"
    },
    {
      "cidadeId": 177,
      "slug": "agua-nova",
      "state": "RN"
    },
    {
      "cidadeId": 187,
      "slug": "aiuaba",
      "state": "CE"
    },
    // ... outras cidades transformadas
  ]
  */
  
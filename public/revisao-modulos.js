/* Módulos de estudo aprofundado — Revisão Ativa (aba "Aula do tema").
   Chave = domínio clínico (mesma classificação de domainOf: "HALF|Nome").
   Formato: { titulo, half, resumo, secoes:[{h,c}], flashcards:[{p,r}], pegadinhas:[],
              diretrizes:[], questoes:[{enunciado, alternativas{a,b,c,d}, correta, comentario, foco}] }.
   Texto das seções (campo c) aceita: parágrafos separados por linha em branco, listas com "- ",
   negrito **assim**, e links. Referências: Tratado de Neurologia da ABN (3ª ed., 2025) + Merritt
   (13ª ed.) — ver materiais_neuro.md. Ampliar aos poucos pela tarefa diária de estudo. */
window.REVISAO_MODULOS = {

/* ===================== NEUROLOGIA ===================== */

"NEURO|Vertigem / síndromes vestibulares": {
 titulo: "Vertigem e síndromes vestibulares",
 half: "NEURO",
 resumo: "Tontura é queixa altíssima na emergência e o erro clássico é confundir uma causa periférica (benigna) com um AVC de fossa posterior. O raciocínio moderno não parte do 'tipo' de tontura, e sim do PADRÃO TEMPORAL + gatilho, refinado pelo exame de cabeceira (HINTS).",
 secoes: [
  {h:"1. Definições e a mudança de paradigma", c:`**Vertigem** é a ilusão de movimento (em geral rotatório) e traduz assimetria aguda do tônus vestibular entre os dois labirintos/vias. Historicamente ensinava-se a classificar a queixa pelo "tipo" (vertigem rotatória × pré-síncope × desequilíbrio × tontura inespecífica), mas os pacientes descrevem o sintoma de forma inconsistente e essa abordagem leva a erro.

O modelo atual (ATTEST/TiTrATE) organiza pela **síndrome temporal**:
- **Síndrome vestibular aguda (SVA):** tontura contínua por dias, de início agudo, com nistagmo, intolerância ao movimento e instabilidade — aqui mora a dúvida neurite (periférico) × AVC (central).
- **Síndrome vestibular episódica desencadeada:** crises de segundos provocadas por mudança de posição (VPPB) ou por manobras/pressão.
- **Síndrome vestibular episódica espontânea:** crises recorrentes de minutos a horas sem gatilho posicional (Ménière, migrânea vestibular, AIT).

Definir a síndrome temporal antes de qualquer exame é o que direciona a investigação.`},

  {h:"2. Anatomia funcional (por que os sinais aparecem)", c:`O labirinto tem três canais semicirculares (detectam aceleração angular) e os órgãos otolíticos — utrículo e sáculo (aceleração linear e gravidade). O sinal segue pelo nervo vestibular até os núcleos vestibulares no tronco, que se conectam ao cerebelo (flóculo/nódulo), aos núcleos oculomotores (via fascículo longitudinal medial) e à medula.

Duas conexões explicam a semiologia:
- **Reflexo vestíbulo-ocular (RVO):** mantém o olhar estável durante o movimento da cabeça. Sua lesão periférica gera o **teste do impulso cefálico (HIT) positivo** (sacada de correção).
- **Vias vestíbulo-espinais e cerebelo:** o cerebelo normalmente "freia" e calibra; lesão central libera nistagmo que muda de direção, desvio skew e ataxia desproporcional.`},

  {h:"3. HINTS — o exame que decide periférico × central na SVA", c:`Em paciente com **síndrome vestibular aguda** (tontura contínua + nistagmo), o **HINTS** tem sensibilidade para AVC maior que a RM com difusão nas primeiras 24–48 h. São três testes:

- **HI (Head Impulse):** giro rápido e pequeno da cabeça enquanto o paciente fixa o nariz do examinador. **Sacada de correção (HIT positivo/anormal) = periférico** (RVO lesado). **HIT normal na SVA = central** (contraintuitivo — o reflexo intacto num paciente muito tonto sugere que o problema não é o labirinto).
- **N (Nystagmus):** periférico = unidirecional, horizonto-torcional, bate para o lado são, **inibe com fixação**. Central = muda de direção com o olhar, vertical puro ou torcional puro, não inibe com fixação.
- **TS (Test of Skew):** desvio vertical à cobertura alternada dos olhos = central.

Regra mnemônica **INFARCT** (sinais centrais): **I**mpulse **N**ormal, **F**ast-phase **A**lternating, **R**efixation on **C**over **T**est. Basta UM sinal central para tratar como central. HINTS só vale na SVA contínua com nistagmo — não use em paciente sem nistagmo ou em tontura episódica.`},

  {h:"4. Os grandes diagnósticos", c:`- **VPPB (vertigem posicional paroxística benigna):** otólitos deslocados para um canal (posterior na maioria). Crises de **segundos** ao deitar/virar na cama, sem sintoma auditivo. Diagnóstico e tratamento são **manobras** (ver seção 5).
- **Neurite vestibular:** SVA contínua por dias, HIT positivo, nistagmo periférico, **sem** hipoacusia; provável origem viral/inflamatória. Se há perda auditiva associada, fala-se em labirintite.
- **Doença de Ménière:** hidropisia endolinfática. Crises espontâneas de **20 min a 12 h** com a **tríade**: hipoacusia neurossensorial flutuante (baixas frequências), zumbido e plenitude aural. Evolui com perda auditiva permanente.
- **Migrânea vestibular:** causa mais comum de vertigem episódica espontânea recorrente; história de enxaqueca, crises de 5 min a 72 h, sintomas migranosos em parte delas, **audição preservada**.
- **AVC de fossa posterior (cerebelo/tronco):** o "não pode perder". Pode simular periférico; pistas: sinais centrais no HINTS, cefaleia/cervicalgia occipital, ataxia de tronco desproporcional, outros déficits de tronco. Fatores de risco vascular aumentam a suspeita, mas **não** bastam para decidir (paciente vascular também tem neurite).`},

  {h:"5. Manobras diagnósticas e terapêuticas por canal", c:`A pegadinha recorrente é casar a manobra certa com o canal certo:
- **Canal posterior (o mais comum):** diagnóstico pelo **Dix-Hallpike** (nistagmo torcional-para-cima geotrópico, com latência e fatigabilidade); tratamento pela **manobra de Epley**.
- **Canal horizontal:** diagnóstico pelo **head-roll / teste de Pagnini-McClure** (paciente supino, roda-se a cabeça para cada lado); tratamento pela **manobra de barbecue** (rotação em 360°) ou Gufoni.

Erros clássicos: aplicar Dix-Hallpike no canal horizontal (dá falso-negativo) e tratar VPPB com medicação. **Supressores vestibulares** (anti-histamínicos, benzodiazepínicos) servem só para alívio sintomático de 24–72 h na SVA; usados por muito tempo **atrapalham a compensação central** e não tratam a VPPB.`},

  {h:"6. Quando pedir imagem", c:`- **TC de crânio é ruim** para fossa posterior e isquemia aguda — TC normal **não** exclui AVC de tronco/cerebelo.
- O exame de escolha diante de suspeita central é a **RM com difusão** (lembrando que até ~20% das RM precoces de AVC de tronco podem ser falsamente normais nas primeiras horas — por isso o HINTS bem feito supera a RM precoce).
- Imagem também se justifica em nistagmo puramente vertical/torcional, cefaleia súbita associada, déficit focal e fatores de risco com HINTS duvidoso.`},
 ],
 flashcards: [
  {p:"Na síndrome vestibular aguda, HIT (impulso cefálico) NORMAL sugere o quê?", r:"Causa central (AVC de fossa posterior) — o reflexo intacto num paciente muito tonto é bandeira vermelha."},
  {p:"Qual manobra diagnostica o canal posterior e qual o trata?", r:"Diagnóstico: Dix-Hallpike. Tratamento: manobra de Epley."},
  {p:"Tríade da doença de Ménière?", r:"Hipoacusia neurossensorial flutuante + zumbido + plenitude aural, em crises de 20 min a 12 h."},
  {p:"Vertigem episódica recorrente sem hipoacusia, em paciente com enxaqueca?", r:"Migrânea vestibular — tratar com profilaxia de enxaqueca."},
  {p:"Sigla dos sinais centrais no HINTS?", r:"INFARCT: Impulse Normal, Fast-phase Alternating, Refixation on Cover Test."},
 ],
 pegadinhas: [
  "Dix-Hallpike é para o canal POSTERIOR; canal horizontal usa head-roll (Pagnini-McClure) — manobra errada dá falso-negativo.",
  "SVA contínua com impulso cefálico NORMAL = suspeitar de AVC (central), não relaxar.",
  "TC de crânio tem baixa sensibilidade para isquemia de fossa posterior — o exame é RM com difusão (e mesmo ela pode ser falso-negativa nas primeiras horas).",
  "Sem hipoacusia não é Ménière: pense migrânea vestibular ou VPPB.",
  "Betaistina e flunarizina não são primeira linha da VPPB — o tratamento é a manobra de reposicionamento.",
  "HINTS só se aplica à SVA contínua COM nistagmo; não use em tontura episódica ou sem nistagmo.",
  "Fatores de risco vascular sozinhos não decidem central × periférico — use o exame.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 135–138 (Síndrome Vestibular Aguda, Vertigem Recorrente, Vertigem Posicional, Síndrome Vestibular Crônica) e cap. 20 — Tonturas e Vertigem (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 2 — Tontura, Vertigem e Perda Auditiva.",
  "Critérios da Bárány Society (VPPB, migrânea vestibular, Ménière); Adams & Victor — “Deafness, Dizziness, and Disorders of Equilibrium”.",
 ],
 questoes: [
  {foco:"HINTS central (seu ponto de erro)",
   enunciado:"Homem de 62 anos, hipertenso e diabético, com vertigem rotatória aguda e contínua há 6 horas. Ao exame: teste do impulso cefálico NORMAL, nistagmo que muda de direção conforme a direção do olhar e discreto desvio skew. Qual a conduta mais adequada?",
   alternativas:{a:"Manobra de Epley e alta",b:"Ressonância magnética com difusão por suspeita de AVC de fossa posterior",c:"Prescrever betaistina e reavaliar em 30 dias",d:"Tomografia de crânio, que se normal exclui causa grave"},
   correta:"b",
   comentario:"Os três achados (impulso cefálico normal, nistagmo que muda de direção e skew) são o padrão CENTRAL do HINTS — bandeira vermelha para AVC de fossa posterior, apesar da tontura isolada. A conduta é neuroimagem que enxergue a fossa posterior, ou seja, RM com difusão. Epley trata VPPB (crises de segundos, posicionais) — não é o caso. Betaistina/ambulatório protelam uma emergência. E a TC de crânio tem baixa sensibilidade para isquemia aguda de fossa posterior: TC normal NÃO exclui. Lembre do paradoxo: impulso cefálico normal na vertigem aguda contínua aponta para central."},
  {foco:"Canal e manobra correta (VPPB)",
   enunciado:"Mulher de 54 anos com crises de vertigem de segundos desencadeadas ao rolar na cama para os lados, sem hipoacusia. Suspeita-se de VPPB de canal horizontal. Qual a manobra diagnóstica apropriada?",
   alternativas:{a:"Dix-Hallpike",b:"Teste de impulso cefálico",c:"Head-roll (Pagnini-McClure)",d:"Manobra de Epley"},
   correta:"c",
   comentario:"A manobra diagnóstica depende do canal suspeito. O canal horizontal é avaliado pelo head-roll (Pagnini-McClure), com o paciente em decúbito dorsal girando a cabeça para cada lado. O Dix-Hallpike diagnostica o canal POSTERIOR (o mais comum) e daria falso-negativo aqui. O impulso cefálico avalia neurite/central, não posiciona canal. Epley é tratamento (reposicionamento) do canal posterior, não diagnóstico do horizontal — para o horizontal o tratamento é a manobra de barbecue. Pegadinha clássica: casar a manobra certa com o canal certo."},
  {foco:"Ménière × migrânea vestibular",
   enunciado:"Mulher de 40 anos com enxaqueca desde a adolescência apresenta episódios recorrentes de vertigem de minutos a poucas horas, metade com cefaleia e fotofobia, sem qualquer perda auditiva; audiometria intercrise normal. Qual o diagnóstico e a conduta?",
   alternativas:{a:"Doença de Ménière; restrição de sal e diurético",b:"VPPB; manobra de Epley",c:"Migrânea vestibular; profilaxia de enxaqueca",d:"Neurite vestibular; corticoide"},
   correta:"c",
   comentario:"Sem hipoacusia não é Ménière (que exige a tríade hipoacusia flutuante + zumbido + plenitude aural). O quadro recorrente, em paciente com enxaqueca, com sintomas migranosos em parte das crises e audição preservada, é migrânea vestibular, tratada com profilaxia da enxaqueca (propranolol, topiramato, amitriptilina). VPPB dura segundos e é posicional; neurite vestibular é episódio único, agudo e contínuo por dias. A audiometria normal é a chave que separa da Ménière."},
 ]
},

"NEURO|Neuroimunologia (EM / encefalites / NMO)": {
 titulo: "Neuroimunologia — desmielinizantes e encefalites autoimunes",
 half: "NEURO",
 resumo: "Um espectro que a banca adora justamente porque os quadros se parecem. A chave é reconhecer a assinatura de cada doença: disseminação no tempo/espaço (EM), anti-AQP4 e mielite extensa (NMO), encefalopatia monofásica pós-infecciosa (ADEM), e o consumo de complemento que separa lúpus de anti-NMDA.",
 secoes: [
  {h:"1. Esclerose múltipla (EM) — conceito e fisiopatologia", c:`Doença inflamatória desmielinizante crônica do SNC, imunomediada, mais comum em **mulheres jovens (20–40 anos)**, com gradiente de latitude e associação a baixa vitamina D, tabagismo e vírus Epstein-Barr. Linfócitos T autorreativos atravessam a barreira hematoencefálica e, com linfócitos B e micróglia, produzem placas de desmielinização perivenular na substância branca (e cinzenta), com graus variados de dano axonal — este responsável pela incapacidade progressiva.

Fenótipos: **remitente-recorrente** (surtos com recuperação, o mais comum no início), **secundariamente progressiva** e **primariamente progressiva**. Um surto exige déficit neurológico > 24 h, na ausência de febre/infecção (que causam pseudossurto — fenômeno de Uhthoff: piora transitória com calor).`},

  {h:"2. Clínica e critérios de McDonald", c:`Apresentações típicas: neurite óptica (dor à movimentação + baixa visual monocular), mielite parcial, síndromes de tronco (oftalmoplegia internuclear, neuralgia do trigêmeo no jovem) e sintomas sensitivos/motores.

O diagnóstico se apoia na **disseminação no tempo (DIT)** e **no espaço (DIS)** — a frase-chave dos **critérios de McDonald (2017)**:
- **DIS:** ≥1 lesão em T2 em ≥2 de 4 topografias típicas (periventricular, cortical/justacortical, infratentorial, medular).
- **DIT:** lesões novas em RM de seguimento, ou coexistência de lesões que captam e não captam gadolínio, **ou bandas oligoclonais no líquor** (que passaram a substituir DIT).

RM é o exame-chave; líquor mostra bandas oligoclonais IgG (síntese intratecal) em >85%.`},

  {h:"3. Neuromielite óptica (NMOSD / anti-AQP4)", c:`Astrocitopatia autoimune contra o canal de água **aquaporina-4**, distinta da EM. Características: **neurite óptica grave** (muitas vezes bilateral, com pior prognóstico visual) e **mielite longitudinalmente extensa (≥3 corpos vertebrais)**, além de síndrome de área postrema (soluços/vômitos intratáveis). Anticorpo **anti-AQP4** positivo confirma.

**Pegadinha capital:** o tratamento típico da EM (**interferon-beta**, natalizumabe, fingolimode) **PIORA a NMO**. Por isso, diante de neurite óptica grave ou mielite extensa, dose-se anti-AQP4 antes de rotular como EM. Surto: corticoide em pulso ± plasmaférese. Manutenção: imunossupressão (rituximabe, eculizumabe, satralizumabe, inebilizumabe).`},

  {h:"4. ADEM e MOGAD", c:`**ADEM (encefalomielite disseminada aguda):** desmielinização **monofásica**, tipicamente pós-infecciosa ou pós-vacinal, mais em **crianças**, com **encefalopatia** (rebaixamento/confusão — obrigatória para o diagnóstico) + lesões multifocais grandes e mal delimitadas. Diferencia-se da EM por ser monofásica e cursar com encefalopatia. Trata-se com corticoide em pulso (± imunoglobulina/plasmaférese).

**MOGAD** (doença associada ao anticorpo anti-MOG): espectro próprio (neurite óptica recorrente, ADEM-like, mielite), anti-MOG positivo, geralmente melhor prognóstico e resposta a corticoide, mas com risco de recaída na retirada rápida.`},

  {h:"5. Encefalites autoimunes: anti-NMDA × lúpica", c:`**Encefalite anti-receptor de NMDA:** mulher jovem, pródromo viral, evolui em semanas com sintomas psiquiátricos/psicose, crises, **discinesias orofaciais**, disautonomia e rebaixamento; associação a **teratoma de ovário**. Complemento **normal**; diagnóstico pelo anti-NMDA no líquor. Tratamento: imunoterapia (corticoide, IVIG, plasmaférese; 2ª linha rituximabe/ciclofosfamida) + retirada do tumor.

**Encefalite lúpica (LES neuropsiquiátrico):** psicose/crises/meningoencefalite no contexto de lúpus. Pista decisiva: **consumo de complemento (C3/C4 baixos)** com FAN/anti-dsDNA e clínica sistêmica. É o **consumo de complemento** que separa lúpus (baixo) de anti-NMDA (normal). Tratamento: pulso de metilprednisolona + imunossupressor (ciclofosfamida).`},

  {h:"6. Diferenciais e armadilhas de imagem", c:`- Lesão desmielinizante que **capta anel aberto** ao gadolínio favorece desmielinização (vs. neoplasia/abscesso, que fazem anel fechado).
- Mielite **curta e parcial** favorece EM; mielite **longa e central** favorece NMO.
- Sempre excluir mimetizadores: neurossífilis, HIV, deficiência de B12/cobre, sarcoidose, vasculite, LES.
- Febre/infecção causam pseudossurto (Uhthoff) — não confundir com surto verdadeiro.`},
 ],
 flashcards: [
  {p:"Frase-chave do diagnóstico de esclerose múltipla?", r:"Disseminação no tempo E no espaço (critérios de McDonald)."},
  {p:"O que separa a encefalite lúpica da anti-NMDA?", r:"Consumo de complemento (C3/C4 baixos) no lúpus; complemento normal na anti-NMDA."},
  {p:"Por que dosar anti-AQP4 antes de tratar como EM?", r:"Porque interferon-beta e vários modificadores de EM PIORAM a NMO."},
  {p:"O que define ADEM frente à EM?", r:"Quadro monofásico + encefalopatia (rebaixamento/confusão), em geral pós-infeccioso na criança."},
  {p:"Anti-NMDA em mulher jovem: o que rastrear?", r:"Teratoma de ovário."},
 ],
 pegadinhas: [
  "“Disseminação no tempo e no espaço” é a assinatura de McDonald (EM) — decore literalmente.",
  "Tratar NMO como EM (interferon-beta) PIORA a doença — dose anti-AQP4 antes.",
  "ADEM = monofásico + encefalopatia; EM não exige encefalopatia e é recorrente.",
  "Complemento baixo (C3/C4) na encefalite = pense lúpus (anti-NMDA tem complemento normal).",
  "Bandas oligoclonais no líquor podem cumprir o critério de disseminação no tempo na EM.",
  "Febre/calor causam pseudossurto (Uhthoff) — não é surto verdadeiro.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 85–91 (Esclerose Múltipla; Espectro da Neuromielite Óptica; ADEM; Encefalites Autoimunes e Paraneoplásicas; MOGAD/GFAP) (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 10 — Doenças Desmielinizantes e Inflamatórias.",
  "PCDT de Esclerose Múltipla (Ministério da Saúde/BVSMS); Adams & Victor — “Multiple Sclerosis and Allied Demyelinating Diseases”.",
 ],
 questoes: [
  {foco:"NMO × EM (pegadinha do tratamento)",
   enunciado:"Mulher de 34 anos com neurite óptica grave e mielite estendendo-se por 4 segmentos vertebrais; anticorpo anti-aquaporina-4 positivo. Qual conduta é INADEQUADA por poder agravar a doença?",
   alternativas:{a:"Corticoide em pulsoterapia no surto",b:"Plasmaférese se resposta insuficiente ao corticoide",c:"Interferon-beta como terapia de manutenção",d:"Rituximabe para manutenção"},
   correta:"c",
   comentario:"O quadro é neuromielite óptica (anti-AQP4+): neurite óptica grave + mielite longitudinalmente extensa (≥3 segmentos). O erro clássico é tratá-la como esclerose múltipla: o interferon-beta (e alguns modificadores de EM) PIORA a NMO. O correto no surto é corticoide em pulso, com plasmaférese se refratário, e manutenção com imunossupressor (rituximabe, azatioprina, eculizumabe). Por isso sempre se dosa anti-AQP4 antes de rotular como EM."},
  {foco:"Consumo de complemento (anti-NMDA × lúpica)",
   enunciado:"Mulher de 24 anos com primeira crise convulsiva, duas semanas de alteração de comportamento e alucinações. Exames: C3 e C4 baixos, FAN em título alto, líquor com pleocitose. Qual o diagnóstico mais provável?",
   alternativas:{a:"Encefalite lúpica (LES neuropsiquiátrico)",b:"Encefalite anti-receptor de NMDA",c:"Esclerose múltipla",d:"Encefalite herpética"},
   correta:"a",
   comentario:"O consumo de complemento (C3/C4 baixos) com fator antinuclear em título alto é a pista da encefalite lúpica (lúpus neuropsiquiátrico). A encefalite anti-NMDA também dá psicose/crises semelhantes, mas com complemento NORMAL e frequentemente discinesias orofaciais e teratoma de ovário. A esclerose múltipla não causa quadro psicótico agudo inaugural nem consumo de complemento. A herpética é febril, aguda, com acometimento temporal e PCR+ para HSV. Tratamento do LES neuropsiquiátrico: pulso de metilprednisolona + imunossupressor (ciclofosfamida)."},
  {foco:"McDonald / disseminação no tempo e espaço",
   enunciado:"Mulher de 29 anos com episódio de neurite óptica agora e história, há 3 meses, de dormência em membros que resolveu sozinha; RM com lesões periventriculares e medulares. Qual conceito confirma o diagnóstico de esclerose múltipla?",
   alternativas:{a:"Positividade para anti-aquaporina-4",b:"Disseminação no tempo e no espaço",c:"Encefalopatia com lesão monofásica",d:"Consumo de complemento sérico"},
   correta:"b",
   comentario:"O diagnóstico de EM se apoia na disseminação no tempo (surtos em momentos diferentes) e no espaço (lesões em sítios típicos distintos) — os critérios de McDonald. O anti-AQP4 positivo apontaria NMO, não EM. Encefalopatia monofásica sugere ADEM. Consumo de complemento remete a lúpus. Bandas oligoclonais no líquor apoiam, mas o conceito-chave cobrado é a dupla disseminação temporal e espacial."},
 ]
},

"NEURO|Medula / cauda equina": {
 titulo: "Medula espinal, cauda equina e mielopatias",
 half: "NEURO",
 resumo: "O eixo é topográfico e de urgência: reconhecer a emergência (compressão medular / cauda equina), pedir o exame certo (RM) sem atraso, e localizar a lesão pelo padrão (nível sensitivo, NMS × NMI, sela e esfíncteres).",
 secoes: [
  {h:"1. Localização: as síndromes medulares", c:`A medula organiza-se em tratos cujo acometimento gera síndromes reconhecíveis:
- **Transecção completa:** perda motora e sensitiva abaixo do nível + disfunção esfincteriana; na fase aguda, **choque medular** (flacidez e arreflexia transitórias).
- **Síndrome de Brown-Séquard (hemissecção):** paresia e perda de propriocepção **ipsilaterais** + perda de dor/temperatura **contralateral** (2–3 níveis abaixo).
- **Síndrome centromedular:** fraqueza que predomina em membros superiores, dissociação sensitiva "em capa"; típica de trauma em hiperextensão no idoso com canal estreito.
- **Síndrome da artéria espinal anterior:** paraplegia + perda de dor/temperatura com **preservação da propriocepção** (cordões posteriores poupados).
- **Cordões posteriores** (B12, tabes, cobre): ataxia sensitiva, Romberg positivo.`},

  {h:"2. Cauda equina × cone medular", c:`Ponto clássico de prova:
- **Síndrome da cauda equina:** lesão das raízes lombossacras (abaixo de L1-L2). Predomina **neurônio motor inferior** — fraqueza assimétrica, arreflexia, **dor radicular intensa**, **anestesia em sela**, retenção urinária que tende a ser mais tardia. É **emergência cirúrgica**.
- **Síndrome do cone medular:** lesão do segmento sacral da medula. Mais **simétrica**, com disfunção **esfincteriana e sexual precoce**, anestesia em sela, dor menos proeminente, podendo ter sinais de neurônio motor superior (Babinski).

Na prática, muitos casos são mistos (conus-cauda). O que importa é reconhecer a bandeira e agir.`},

  {h:"3. Emergências: compressão medular e cauda equina", c:`A **síndrome medular aguda** com déficit motor/sensitivo, nível sensitivo e disfunção esfincteriana é emergência. Causas: hérnia discal maciça, trauma, abscesso epidural (febre + dor + déficit, sobretudo em usuário de droga IV/diabético), hematoma epidural (anticoagulado) e **compressão medular metastática** (próstata, mama, pulmão, mieloma).

Conduta:
- **RM de toda a coluna** de urgência (o exame de escolha — não TC, não eletroneuromiografia).
- Na compressão metastática: **corticoide em alta dose (dexametasona) imediatamente**, sem esperar a radioterapia, e definição de RT/cirurgia (cirurgia se instabilidade, tumor radiorresistente ou compressão única com boa expectativa).
- Antibiótico empírico + drenagem no abscesso; reversão da anticoagulação no hematoma.

**Bandeira vermelha da dor lombar:** déficit progressivo, retenção/incontinência, anestesia em sela, febre, perda ponderal, câncer conhecido, dor que piora deitado/à noite.`},

  {h:"4. Mielopatia cervical espondilótica × ELA", c:`Causa mais comum de mielopatia no idoso. Marcha espástica progressiva, mãos "desajeitadas", **sinais de NMS abaixo da lesão** (hiper-reflexia, Babinski, Hoffmann) com NMI no nível. O diferencial cobrado é **ELA**: a ELA combina NMS + NMI **sem** qualquer alteração sensitiva e **sem nível sensitivo**. A presença de hipoestesia/nível sensitivo aponta para a mielopatia compressiva (RM cervical confirma; casos progressivos são cirúrgicos).`},

  {h:"5. Mielopatias não compressivas (regionais e sistêmicas)", c:`- **Neuroesquistossomose medular:** tema regional (Bahia/Nordeste). Adolescente/jovem de área rural com dor lombar, mielorradiculopatia e eosinofilia; diagnóstico por biópsia retal + sorologia para S. mansoni; tratamento com **corticoide + praziquantel**.
- **Mielopatia por HTLV-1 (paraparesia espástica tropical):** paraparesia espástica progressiva + bexiga neurogênica em área endêmica.
- **Degeneração combinada subaguda** (deficiência de **B12**, e cobre): cordões posteriores + laterais; tratável — repor precocemente.
- **Mielite transversa** (idiopática/NMO/MOGAD/pós-infecciosa): déficit em horas-dias; investigar e tratar com corticoide.`},
 ],
 flashcards: [
  {p:"Tríade que grita cauda equina?", r:"Anestesia em sela + retenção urinária + déficit motor de MMII (com dor radicular) → RM urgente."},
  {p:"Exame de escolha na síndrome medular aguda?", r:"Ressonância magnética da coluna (toda a coluna se suspeita de metástase)."},
  {p:"O que torna a ELA improvável numa mielopatia?", r:"Alteração sensitiva com nível sensitivo (a ELA não tem déficit sensitivo)."},
  {p:"Compressão medular metastática: primeira medida junto à RM?", r:"Corticoide em alta dose (dexametasona), imediatamente."},
  {p:"Brown-Séquard: o que fica contralateral?", r:"A perda de dor e temperatura (motor e propriocepção são ipsilaterais)."},
 ],
 pegadinhas: [
  "Anestesia em sela + retenção urinária + dor lombar = cauda equina até prova em contrário → RM URGENTE.",
  "O exame de escolha é RM, não TC nem eletroneuromiografia.",
  "Mielopatia cervical tem alteração sensitiva/nível sensitivo; ELA NÃO — esse é o diferencial.",
  "Compressão medular metastática: corticoide em alta dose já, sem esperar a radioterapia.",
  "Dor lombar que piora deitado/à noite e desperta o paciente é bandeira vermelha.",
  "Febre + dor nas costas + déficit = abscesso epidural (não perder em diabético/usuário de droga IV).",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), cap. 114 — Radiculopatias e Plexopatias; cap. 169 — Mielopatias Metabólicas e Tóxicas; cap. 146 — Neuroesquistossomose; cap. 153 — Mielopatia associada ao HTLV-1 (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 15 — Doenças da Medula Espinal; Seção 2 — Síndromes Raquimedulares Agudas.",
  "Adams & Victor — “Diseases of the Spinal Cord” e “Pain in the Back, Neck, and Extremities”.",
 ],
 questoes: [
  {foco:"Reconhecer a emergência e o exame (seu ponto de erro)",
   enunciado:"Homem de 45 anos com lombalgia há meses, agora com fraqueza de membros inferiores, anestesia perineal e retenção urinária com gotejamento há 24 horas. Qual a conduta imediata?",
   alternativas:{a:"Repouso e AINE, reavaliar em 2 semanas",b:"Eletroneuromiografia ambulatorial",c:"Ressonância magnética de coluna lombossacra de urgência",d:"Tomografia de crânio"},
   correta:"c",
   comentario:"O quadro é síndrome da cauda equina — emergência neurocirúrgica. A conduta é RM de coluna lombossacra de urgência para confirmar e localizar a compressão, seguida de descompressão precoce (previne incontinência permanente). Repouso/AINE atrasam uma emergência. A eletroneuromiografia não é o exame agudo de escolha. TC de crânio não tem relação. Tríade a memorizar: anestesia em sela + retenção urinária + déficit motor de MMII."},
  {foco:"Mielopatia cervical × ELA",
   enunciado:"Homem de 60 anos com marcha espástica progressiva, hiper-reflexia e Babinski, mas também com hipoestesia em mãos e nível sensitivo cervical. Qual dado torna a ELA improvável?",
   alternativas:{a:"A presença de sinais de neurônio motor superior",b:"A alteração sensitiva com nível sensitivo",c:"A marcha espástica",d:"A idade do paciente"},
   correta:"b",
   comentario:"A ELA acomete neurônios motores superior e inferior SEM alteração sensitiva. A presença de hipoestesia com nível sensitivo aponta para lesão medular (mielopatia cervical espondilótica), não ELA. Sinais de neurônio motor superior e marcha espástica ocorrem em ambas e não discriminam. A idade também não separa. RM cervical confirma a compressão; a ausência de déficit sensitivo é justamente o que caracteriza a ELA."},
  {foco:"Compressão medular metastática",
   enunciado:"Homem de 63 anos com câncer de próstata metastático, dor dorsal que piora deitado e paraparesia com nível sensitivo torácico. Além da RM de toda a coluna, qual medida deve ser iniciada imediatamente?",
   alternativas:{a:"Corticoide em dose alta",b:"Anticoagulação plena",c:"Aguardar biópsia antes de qualquer tratamento",d:"Punção lombar de alívio"},
   correta:"a",
   comentario:"Na compressão medular metastática, o corticoide em dose alta (dexametasona) deve ser iniciado imediatamente para reduzir o edema e proteger a função neurológica, enquanto se define radioterapia e/ou cirurgia — não se espera a RT. Anticoagulação não trata a compressão. Esperar biópsia atrasa e pode custar a deambulação. Punção lombar é contraindicada/inútil aqui e pode piorar. Dor que piora deitado/à noite + nível sensitivo em paciente oncológico é a apresentação clássica."},
 ]
},

"NEURO|Demências": {
 titulo: "Demências e neurologia do envelhecimento",
 half: "NEURO",
 resumo: "Reconhecer o padrão (Alzheimer, vascular, corpos de Lewy, frontotemporal), separar de delirium, caçar as causas reversíveis (com destaque para a hidrocefalia de pressão normal) e manejar os sintomas comportamentais na ordem certa (não farmacológico primeiro).",
 secoes: [
  {h:"1. Demência × delirium × declínio normal", c:`**Demência (transtorno neurocognitivo maior):** declínio cognitivo adquirido, persistente, em ≥1 domínio (memória, funções executivas, linguagem, visuoespacial, social), com **perda de funcionalidade**. Diferencie sempre de:
- **Delirium:** início **agudo**, curso **flutuante**, alteração da **atenção** e do nível de consciência, com causa orgânica (infecção, fármacos, distúrbio metabólico). É reversível e uma emergência — excluir antes de rotular demência.
- **Comprometimento cognitivo leve (CCL):** declínio objetivo sem perda funcional significativa — pode preceder demência.`},

  {h:"2. Doença de Alzheimer", c:`Causa mais comum. Início insidioso, progressão lenta, com **memória episódica** afetada primeiro (esquece fatos recentes, repete perguntas), depois funções executivas, linguagem e visuoespacial. MEEM/MoCA alterados; biomarcadores (beta-amiloide baixo e tau/p-tau altos no líquor; PET amiloide) confirmam.

Tratamento sintomático cognitivo: **anticolinesterásicos** (donepezila, rivastigmina, galantamina) nas fases leve-moderada; **memantina** (antagonista NMDA) na moderada-grave, isolada ou associada. Não modificam de forma robusta a progressão; anticorpos anti-amiloide são novidade de uso restrito.`},

  {h:"3. Os grandes diferenciais degenerativos e vascular", c:`- **Demência vascular / comprometimento cognitivo vascular:** curso em **degraus**, fatores de risco vascular, achados focais e lesões na imagem; disfunção executiva proeminente.
- **Demência com corpos de Lewy:** **flutuação cognitiva** + **alucinações visuais precoces** + **parkinsonismo** + transtorno comportamental do sono REM. **Hipersensibilidade a antipsicóticos** (evitar; risco de rigidez grave).
- **Demência frontotemporal (variante comportamental):** mudança de **personalidade/comportamento** (desinibição, apatia, perda de empatia, comportamento compulsivo) precede a perda de memória, em paciente **mais jovem** (50–65 anos).
- **Doenças priônicas (Creutzfeldt-Jakob):** demência **rapidamente progressiva** + mioclonias + ataxia.`},

  {h:"4. Causas reversíveis — não perder", c:`Toda demência merece rastreio de causas tratáveis:
- **Hidrocefalia de pressão normal:** **tríade de Hakim-Adams** — distúrbio de marcha "magnética"/apráxica (o sintoma mais precoce e o que mais responde) + incontinência urinária + declínio cognitivo. Ventriculomegalia desproporcional à atrofia. **Tap test** (punção lombar de alívio) com melhora da marcha prediz resposta à **derivação ventriculoperitoneal**.
- Outras: **deficiência de B12**, **hipotireoidismo**, **neurossífilis**, HIV, hematoma subdural crônico, depressão (**pseudodemência**), fármacos.`},

  {h:"5. Manejo dos sintomas comportamentais (ordem correta)", c:`Sintomas comportamentais e psicológicos da demência (agitação, agressividade, psicose, insônia):
- **Primeira linha SEMPRE não farmacológica:** identificar gatilhos (dor, fome, constipação, infecção), ajustar ambiente e rotina, higiene do sono, orientar o cuidador.
- **Antipsicótico só se risco** (agressividade/psicose com perigo), na **menor dose e menor tempo**, cientes do aumento de mortalidade/AVC em idosos com demência.
- **Evitar benzodiazepínicos** (pioram cognição, quedas, delirium).
- Na demência com corpos de Lewy, evitar antipsicóticos pela hipersensibilidade; se imprescindível, um atípico com cautela.`},
 ],
 flashcards: [
  {p:"Como diferenciar delirium de demência?", r:"Delirium: agudo, flutuante, atenção prejudicada, causa orgânica reversível."},
  {p:"Tríade de Hakim-Adams (hidrocefalia de pressão normal)?", r:"Marcha magnética + incontinência urinária + declínio cognitivo; tap test → derivação VP."},
  {p:"Demência com alucinações visuais precoces + flutuação + parkinsonismo?", r:"Demência com corpos de Lewy — evitar antipsicóticos (hipersensibilidade)."},
  {p:"Primeira linha para agitação na demência?", r:"Medidas não farmacológicas; antipsicótico só se risco, dose baixa e curto prazo."},
  {p:"Demência que muda personalidade antes da memória, no paciente mais jovem?", r:"Demência frontotemporal (variante comportamental)."},
 ],
 pegadinhas: [
  "Sintoma comportamental: primeira linha é NÃO farmacológica; antipsicótico só se necessário, dose baixa, tempo curto.",
  "Corpos de Lewy: hipersensibilidade a antipsicóticos — evitar (podem causar rigidez grave).",
  "Hidrocefalia de pressão normal é reversível: tríade de Hakim-Adams + resposta ao tap test → derivação.",
  "Excluir delirium (agudo, atencional) e causas reversíveis (B12, TSH, sífilis) antes de rotular demência.",
  "Na frontotemporal, muda a personalidade/comportamento antes da memória — e o paciente é mais jovem.",
  "Demência rapidamente progressiva com mioclonias: pensar em doença priônica.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 96–102 (Demências; Corpos de Lewy; Alzheimer; Frontotemporal; Cognitivo Vascular; Hidrocefalia de Pressão Normal) e cap. 106 — Tratamento dos Transtornos Comportamentais nas Demências (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 6 — Demência; Seção 2 — Delirium / Demência e Perda de Memória.",
  "PCDT da Doença de Alzheimer (Ministério da Saúde/BVSMS); Adams & Victor — “Dementia and the Neurology of Aging”.",
 ],
 questoes: [
  {foco:"Manejo de sintoma comportamental",
   enunciado:"Mulher de 78 anos com doença de Alzheimer apresenta agitação vespertina e insônia. Qual a conduta inicial mais adequada?",
   alternativas:{a:"Iniciar antipsicótico de rotina",b:"Benzodiazepínico ao deitar",c:"Medidas não farmacológicas (rotina, ambiente, orientação do cuidador)",d:"Suspender o anticolinesterásico"},
   correta:"c",
   comentario:"Sintomas comportamentais e psicológicos da demência têm como primeira linha as medidas não farmacológicas: ajuste do ambiente, rotina, higiene do sono, manejo de gatilhos e orientação ao cuidador. Antipsicótico só se houver risco (agressividade/psicose com perigo), na menor dose e pelo menor tempo — de rotina, não. Benzodiazepínico piora cognição e quedas no idoso. Suspender o anticolinesterásico não trata a agitação e retira benefício cognitivo."},
  {foco:"Hidrocefalia de pressão normal (reversível)",
   enunciado:"Homem de 74 anos com marcha lenta e “grudada no chão”, incontinência urinária e declínio cognitivo há 1 ano; TC com ventriculomegalia desproporcional à atrofia. Qual conduta confirma a hipótese e orienta o tratamento?",
   alternativas:{a:"Iniciar donepezila e reavaliar em 6 meses",b:"Tap test (punção lombar de alívio); se houver melhora, derivação ventriculoperitoneal",c:"Antipsicótico para a marcha",d:"Anticoagulação para provável causa vascular"},
   correta:"b",
   comentario:"A tríade de Hakim-Adams (marcha magnética + incontinência + declínio cognitivo) com ventriculomegalia sugere hidrocefalia de pressão normal, uma causa reversível. O tap test (retirada de liquor) que melhora a marcha prediz boa resposta à derivação ventriculoperitoneal. Donepezila trata Alzheimer, não a hidrocefalia. Antipsicótico não trata marcha e piora idoso. Anticoagulação não tem papel. Reconhecer a reversibilidade é o ponto de prova."},
  {foco:"Corpos de Lewy e antipsicótico",
   enunciado:"Homem de 73 anos com cognição flutuante, alucinações visuais precoces e parkinsonismo. Qual cuidado é essencial no manejo?",
   alternativas:{a:"Usar haloperidol em dose plena para as alucinações",b:"Evitar antipsicóticos por hipersensibilidade característica",c:"Contraindicar anticolinesterásicos",d:"Iniciar levodopa em alta dose imediatamente"},
   correta:"b",
   comentario:"Na demência com corpos de Lewy há hipersensibilidade a antipsicóticos (sobretudo os típicos como haloperidol), que podem provocar rigidez grave e piora — devem ser evitados; se imprescindível, usar um atípico com muita cautela. Anticolinesterásicos costumam ajudar (não são contraindicados). A levodopa pode ser usada com parcimônia para o parkinsonismo, equilibrando piora das alucinações — não em alta dose de imediato. Flutuação + alucinações visuais precoces + parkinsonismo é a tríade a reconhecer."},
 ]
},

"NEURO|HIC / emergências neuro": {
 titulo: "Hipertensão intracraniana e emergências neurológicas",
 half: "NEURO",
 resumo: "Domínio que se sobrepõe à UTI: doutrina de Monro-Kellie e pressão de perfusão cerebral, tríade de Cushing, escalonamento do tratamento da HIC, quando NÃO puncionar (sem atrasar o antibiótico) e os princípios de morte encefálica.",
 secoes: [
  {h:"1. Fisiopatologia — Monro-Kellie e perfusão", c:`O crânio é uma caixa rígida com três compartimentos: parênquima (~80%), sangue (~10%) e liquor (~10%). Pela **doutrina de Monro-Kellie**, o aumento de um volume exige a redução de outro (deslocamento de liquor e sangue venoso). Esgotada a complacência, pequenos aumentos de volume elevam muito a **pressão intracraniana (PIC)**.

O que importa para o cérebro é a **pressão de perfusão cerebral (PPC) = PAM − PIC**. Portanto, PIC alta ou PAM baixa reduzem a perfusão. Alvos habituais em neurointensivismo: manter **PIC < 20–22 mmHg** e **PPC ~60–70 mmHg**, evitando tanto isquemia quanto hiperemia.`},

  {h:"2. Reconhecer a HIC", c:`Sintomas: cefaleia que piora deitado e pela manhã, vômitos (por vezes em jato), turvação visual, papiledema, paralisia do VI par (falso localizatório) e rebaixamento do nível de consciência.

A **tríade de Cushing** (hipertensão arterial + bradicardia + respiração irregular) é sinal **tardio e grave**, de HIC crítica/herniação iminente. As **síndromes de herniação** (uncal — midríase ipsilateral e hemiparesia; central; tonsilar) são emergências que exigem ação imediata.`},

  {h:"3. Escalonamento terapêutico da HIC", c:`Trate por etapas, do menos ao mais agressivo:
- **Medidas gerais (primeiro):** cabeceira a **30°**, cabeça na **linha média** (para não obstruir a drenagem venosa jugular), normovolemia, controle de dor/febre/agitação, **normocapnia** (PaCO2 35–40), normonatremia-alvo e evitar hipotensão.
- **Osmoterapia:** **manitol** (0,25–1 g/kg; atenção à hipovolemia/lesão renal) ou **salina hipertônica** (preferida no choque/hipovolemia).
- **Sedação/analgesia** otimizadas; drenagem liquórica por cateter ventricular; coma barbitúrico em casos refratários.
- **Cirurgia:** craniectomia descompressiva / remoção de lesão.

A **hiperventilação agressiva** (PaCO2 < 30) causa vasoconstrição e risco de **isquemia** — é medida de **resgate temporário** para herniação, não de rotina.`},

  {h:"4. Quando NÃO puncionar — sem atrasar o antibiótico", c:`Na suspeita de meningite com sinais de HIC/efeito de massa (**papiledema, déficit focal, rebaixamento, crises, imunossupressão**), faça **neuroimagem antes da punção lombar** pelo risco de herniação.

**Regra de ouro:** isso **não** deve atrasar o tratamento — colha **hemoculturas** e inicie **antibiótico empírico** (± **dexametasona** antes/junto da primeira dose, sobretudo pneumococo) **imediatamente**, sem esperar a TC nem o resultado do liquor. Atrasar o antibiótico pela imagem é o erro que aumenta mortalidade.`},

  {h:"5. Coma e morte encefálica", c:`Avaliação do coma: estabilizar (ABC), glicemia, e diferenciar causa **estrutural** (déficit focal, sinais de tronco assimétricos) de **metabólica/tóxica** (simétrica, reflexos preservados). Escala de coma de Glasgow orienta a gravidade.

**Morte encefálica** (Resolução CFM 2.173/2017) é diagnóstico **clínico**, com **pré-requisitos**: causa conhecida e irreversível, e exclusão de confundidores (**hipotermia, drogas/sedação, distúrbios metabólicos/hidroeletrolíticos graves, hipotensão**). Exige **coma aperceptivo**, **ausência de reflexos de tronco**, **teste de apneia** positivo, dois exames por médicos distintos (um capacitado) com intervalo, e um **exame complementar** comprobatório de ausência de fluxo/atividade.`},
 ],
 flashcards: [
  {p:"Fórmula da pressão de perfusão cerebral?", r:"PPC = PAM − PIC (alvo PPC ~60–70; PIC < 20–22 mmHg)."},
  {p:"O que é a tríade de Cushing e o que significa?", r:"HAS + bradicardia + respiração irregular = HIC tardia / herniação iminente."},
  {p:"Primeira etapa do tratamento da HIC?", r:"Medidas gerais (cabeceira 30°, linha média, normovolemia, normocapnia) antes da osmoterapia."},
  {p:"Meningite com sinais de HIC: e o antibiótico?", r:"Neuroimagem antes da punção, mas antibiótico empírico (± dexametasona) imediato — não esperar."},
  {p:"Pré-requisito indispensável para abrir protocolo de morte encefálica?", r:"Causa conhecida/irreversível e exclusão de hipotermia, drogas e distúrbios metabólicos."},
 ],
 pegadinhas: [
  "Tríade de Cushing (HAS + bradicardia + respiração irregular) é sinal TARDIO de HIC/herniação.",
  "Primeiro as medidas gerais (cabeceira 30°, normovolemia) ANTES de manitol/salina.",
  "Hiperventilação agressiva não é rotina — vasoconstrição causa isquemia; é resgate temporário.",
  "Sinais de HIC/efeito de massa → neuroimagem antes da punção; mas antibiótico empírico NÃO espera a imagem.",
  "Morte encefálica exige causa conhecida e exclusão de hipotermia/drogas/distúrbios metabólicos antes de testar.",
  "Paralisia do VI par pode ser falso localizatório na HIC (não indica lesão pontina focal).",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), cap. 163 — Hipertensão Intracraniana em Terapia Intensiva; cap. 162 — Manejo do TCE; cap. 171 — Hipertensão Intracraniana Idiopática; cap. 22 — Transtornos do Nível de Consciência (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 5 — Neurotrauma; Seção 14 — Hidrocefalia e Edema Cerebral; Seção 2 — Torpor e Coma / Morte Encefálica.",
  "Resolução CFM 2.173/2017 (morte encefálica); Adams & Victor — “Coma...” e “Intracranial Pressure”.",
 ],
 questoes: [
  {foco:"Escalonamento da HIC",
   enunciado:"Paciente com hipertensão intracraniana confirmada. Qual a primeira medida terapêutica antes de escalonar para osmoterapia?",
   alternativas:{a:"Manitol em bolus",b:"Medidas gerais: cabeceira a 30°, linha média, normovolemia e normocapnia",c:"Hiperventilação agressiva mantida",d:"Craniectomia descompressiva imediata"},
   correta:"b",
   comentario:"O tratamento da HIC é escalonado: começa pelas medidas gerais (cabeceira a 30°, cabeça na linha média para não obstruir a drenagem venosa, normovolemia, controle de febre/dor/agitação e normocapnia) antes de partir para osmoterapia (manitol/salina hipertônica), sedação e cirurgia. A hiperventilação agressiva mantida causa vasoconstrição e risco de isquemia — é resgate temporário, não rotina. A craniectomia é medida final, não a primeira."},
  {foco:"Quando não puncionar",
   enunciado:"Homem com febre, rigidez de nuca, papiledema e hemiparesia. Qual a conduta correta quanto à punção lombar e ao antibiótico?",
   alternativas:{a:"Punção lombar imediata antes de qualquer antibiótico",b:"Neuroimagem antes da punção; iniciar antibiótico empírico sem esperar o liquor",c:"Adiar o antibiótico até o resultado do liquor",d:"Nenhum antibiótico até a tomografia ficar pronta"},
   correta:"b",
   comentario:"Há sinais de HIC/efeito de massa (papiledema, déficit focal): a punção lombar deve ser adiada para depois da neuroimagem, pelo risco de herniação. Porém o antibiótico empírico (± dexametasona) NÃO deve esperar — inicia-se imediatamente após colher hemoculturas, pois o atraso aumenta a mortalidade da meningite bacteriana. Puncionar antes da imagem, nesse contexto, é perigoso; e adiar o antibiótico pela imagem/liquor é o erro que mata."},
  {foco:"Morte encefálica (pré-requisitos)",
   enunciado:"Antes de iniciar o protocolo de morte encefálica, qual condição é indispensável?",
   alternativas:{a:"Causa do coma conhecida e exclusão de hipotermia, drogas e distúrbios metabólicos",b:"Apenas um exame clínico por um único médico",c:"Presença de reflexos de tronco preservados",d:"Dispensar exame complementar em todos os casos"},
   correta:"a",
   comentario:"O diagnóstico de morte encefálica exige pré-requisitos: causa conhecida e irreversível do coma e exclusão de confundidores (hipotermia, intoxicação/sedação, distúrbios hidroeletrolíticos/metabólicos graves). É preciso coma aperceptivo com AUSÊNCIA de reflexos de tronco (não preservados), teste de apneia positivo, exames repetidos por examinadores distintos e um exame complementar comprobatório, conforme a Resolução CFM 2.173/2017. Por isso a alternativa que reúne causa conhecida + exclusão de confundidores é a correta."},
 ]
},

"NEURO|Transtornos do movimento": {
 titulo: "Transtornos do movimento",
 half: "NEURO",
 resumo: "O foco é separar Parkinson idiopático de parkinsonismo secundário (sobretudo farmacológico) e atípico, reconhecer tremor essencial, e não perder o Wilson no jovem. Resposta à levodopa e DAT-scan ajudam a decidir.",
 secoes: [
  {h:"1. Hipocinéticos × hipercinéticos", c:`Os transtornos do movimento dividem-se em **hipocinéticos** (parkinsonismos — pobreza de movimento) e **hipercinéticos** (tremor, coreia, distonia, mioclonia, tiques, balismo). O **parkinsonismo** é uma síndrome: **bradicinesia** obrigatória + pelo menos um entre **rigidez** e **tremor de repouso** (instabilidade postural é tardia). Definir se há parkinsonismo e depois sua causa é o algoritmo.`},

  {h:"2. Doença de Parkinson idiopática", c:`Neurodegeneração dopaminérgica da substância negra com **corpos de Lewy** (alfa-sinucleína). Clínica **assimétrica**: tremor de repouso "contar moedas", bradicinesia, rigidez em roda denteada; marcha em pequenos passos, festinação, hipomimia, micrografia.

**Sintomas não motores** (muitas vezes precedem): **hiposmia**, **constipação**, **transtorno comportamental do sono REM**, depressão, disautonomia. **Boa resposta à levodopa** é regra e apoia o diagnóstico. Tratamento: levodopa/carbidopa, agonistas dopaminérgicos, iMAO-B; casos avançados com flutuações apesar de otimização → **estimulação cerebral profunda** (alvos **núcleo subtalâmico** e **globo pálido interno**).`},

  {h:"3. Parkinsonismo farmacológico e atípico", c:`- **Parkinsonismo farmacológico:** 2ª causa mais comum. **Bloqueadores D2** — **metoclopramida**, antipsicóticos, **flunarizina/cinarizina**. Costuma ser mais **simétrico**, sem sintomas não motores; o **DAT-scan é NORMAL** (via nigroestriatal íntegra) — é o exame que o separa do Parkinson. Conduta: **suspender o fármaco** (não iniciar levodopa).
- **Parkinsonismos atípicos ("Parkinson-plus"):** paralisia supranuclear progressiva (quedas precoces, paralisia do olhar vertical), atrofia de múltiplos sistemas (disautonomia/ataxia), degeneração corticobasal. Respondem **mal** à levodopa e têm sinais de alarme ("red flags") precoces.`},

  {h:"4. Tremor essencial", c:`Tremor **postural e de ação** (não de repouso), bilateral, predominando nas mãos, podendo afetar cabeça e voz; **história familiar** (autossômico dominante) e **melhora com álcool**. Sem bradicinesia/rigidez; **DAT-scan normal**. Primeira linha: **propranolol** ou **primidona**; refratários → estimulação cerebral profunda do **núcleo ventral intermédio (VIM)** do tálamo.

Diferença essencial do Parkinson: tremor de **ação** (essencial) × tremor de **repouso** (Parkinson).`},

  {h:"5. Coreias, distonias e Wilson", c:`- **Coreia de Sydenham:** pós-estreptocócica, criança/adolescente, autolimitada; critério maior de febre reumática.
- **Doença de Huntington:** **coreia** + declínio **cognitivo/psiquiátrico** + herança **autossômica dominante** (expansão **CAG** no gene HTT), com antecipação.
- **Distonias:** contrações sustentadas com posturas anômalas; focais (blefaroespasmo, torcicolo) tratam-se com **toxina botulínica**.
- **Doença de Wilson:** **jovem (<40 anos)** com transtorno do movimento (tremor "em bater de asas", distonia, disartria) + **hepatopatia** + **anéis de Kayser-Fleischer**, **ceruloplasmina baixa** e cobre urinário alto. É **tratável** (quelantes — trientina/D-penicilamina — e zinco) — por isso não pode passar despercebida.`},
 ],
 flashcards: [
  {p:"Conduta no parkinsonismo por metoclopramida?", r:"Suspender o fármaco (não iniciar levodopa); DAT-scan seria normal."},
  {p:"O que separa tremor essencial de Parkinson?", r:"Essencial = tremor de ação/postural, melhora com álcool, DAT-scan normal; Parkinson = repouso, responde à levodopa."},
  {p:"Jovem com transtorno do movimento + hepatopatia: pensar em?", r:"Doença de Wilson (ceruloplasmina baixa, anéis de Kayser-Fleischer) — tratável."},
  {p:"Alvos da estimulação cerebral profunda no Parkinson?", r:"Núcleo subtalâmico e globo pálido interno."},
  {p:"Herança e mutação da doença de Huntington?", r:"Autossômica dominante, expansão CAG no gene HTT."},
 ],
 pegadinhas: [
  "Parkinsonismo farmacológico: SUSPENDER o fármaco (metoclopramida/antipsicótico), não iniciar levodopa.",
  "DAT-scan NORMAL separa parkinsonismo farmacológico e tremor essencial do Parkinson idiopático.",
  "Tremor essencial é de AÇÃO/postural e melhora com álcool; Parkinson é de REPOUSO.",
  "Jovem com distúrbio do movimento + hepatopatia = investigar Wilson (ceruloplasmina, K-F) — tratável.",
  "Metoclopramida e flunarizina/cinarizina são causas frequentemente esquecidas de parkinsonismo.",
  "Má resposta à levodopa + quedas/olhar vertical precoces = pensar em parkinsonismo atípico.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 59–68 (Parkinson; Tremor Essencial; Distonias; Huntington; Movimento Infeccioso/Autoimune; Induzidos por Drogas; Doença de Wilson; Parkinsonismo Atípico) (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 11 — Distúrbios do Movimento.",
  "PCDT da Doença de Parkinson (Ministério da Saúde/BVSMS); Adams & Victor — “Abnormalities of Movement” e “Parkinson Disease”.",
 ],
 questoes: [
  {foco:"Parkinsonismo farmacológico (conduta)",
   enunciado:"Mulher de 58 anos com bradicinesia, rigidez e tremor há 3 meses, em uso de metoclopramida diária há meses. Qual a conduta mais adequada?",
   alternativas:{a:"Iniciar levodopa",b:"Suspender a metoclopramida",c:"Iniciar antipsicótico",d:"Solicitar teste genético para Parkinson"},
   correta:"b",
   comentario:"O quadro sugere parkinsonismo farmacológico pela metoclopramida (bloqueador D2). A conduta é suspender o fármaco causador e reavaliar — a maioria melhora em semanas a meses. Iniciar levodopa é erro (trata Parkinson idiopático, não a causa iatrogênica). Antipsicótico agravaria (mais bloqueio dopaminérgico). O DAT-scan, se feito, seria normal — o que confirma a origem farmacológica e separa do Parkinson idiopático."},
  {foco:"Tremor essencial × Parkinson",
   enunciado:"Homem de 62 anos com tremor bilateral das mãos que aparece ao segurar o copo e ao escrever, melhora com álcool, sem rigidez ou bradicinesia, com pai afetado. Qual o tratamento de primeira linha?",
   alternativas:{a:"Levodopa",b:"Propranolol",c:"Metoclopramida",d:"Toxina botulínica para todos os casos"},
   correta:"b",
   comentario:"O quadro é tremor essencial (postural/de ação, familiar, melhora com álcool, sem sinais parkinsonianos). Primeira linha: propranolol ou primidona. Levodopa não tem papel (é do Parkinson). Metoclopramida pioraria (induz parkinsonismo). Toxina botulínica fica para casos selecionados/refratários (tremor cefálico ou vocal), não é primeira linha universal. O tremor de ação e a melhora com álcool são as pistas."},
  {foco:"Wilson (não perder no jovem)",
   enunciado:"Homem de 22 anos com tremor, disartria e alterações de comportamento há 1 ano, além de hepatopatia. Qual investigação é prioritária por identificar causa tratável?",
   alternativas:{a:"Dosagem de ceruloplasmina e pesquisa de anéis de Kayser-Fleischer",b:"Teste genético para Huntington",c:"Cintilografia DAT-scan",d:"Dosagem de anti-estreptolisina O"},
   correta:"a",
   comentario:"Jovem com distúrbio do movimento + hepatopatia obriga a investigar doença de Wilson: ceruloplasmina baixa, cobre urinário elevado e anéis de Kayser-Fleischer — condição TRATÁVEL (quelantes de cobre/zinco), por isso não pode passar. Huntington cursa com coreia + demência + herança dominante, mas não é tratável de forma curativa e não explica a hepatopatia. DAT-scan não faz o diagnóstico etiológico aqui. ASLO remete a Sydenham (coreia pós-estreptocócica), quadro diferente."},
 ]
},

/* ===================== PEDIATRIA ===================== */

"PED|Imunização": {
 titulo: "Imunização — PNI e calendário",
 half: "PED",
 resumo: "A banca cobra o tipo de vacina (viva × inativada) e o que decorre disso, as contraindicações reais × falsas, condutas do calendário do PNI, atraso/intervalos e a vigilância (paralisia flácida aguda, eventos adversos).",
 secoes: [
  {h:"1. Tipos de vacina — o conceito que resolve a maioria das questões", c:`- **Vivas atenuadas:** BCG, **rotavírus**, **febre amarela**, **tríplice/tetra viral (SCR/SCRV)**, **varicela**, dengue (em indicações específicas). Em regra **contraindicadas em imunodepressão grave e gestação**; entre duas vacinas vivas parenterais, respeitar intervalo de 30 dias se não aplicadas no mesmo dia.
- **Inativadas / subunidades / toxoides / conjugadas:** hepatite B, **pentavalente** (DTP+Hib+HepB), **VIP** (poliomielite inativada), pneumocócica, meningocócica, HPV, dTpa, influenza, hepatite A. **Seguras** em imunodeprimidos e gestantes.

Saber a natureza da vacina resolve quase toda questão de contraindicação e de coadministração.`},

  {h:"2. Poliomielite — VOP × VIP e vigilância", c:`O esquema atual usa **VIP** (inativada, injetável) nas doses do primeiro ano e nos reforços (o Brasil migrou para esquema **integralmente VIP**, aposentando a VOP oral). A **VOP** é vírus **vivo atenuado** e pode, raramente, causar **poliomielite associada à vacina (VAPP)** por reversão de virulência — por isso não se usa em imunodeprimidos nem em seus contatos quando ainda empregada.

**Paralisia flácida aguda (PFA)** em menor de 15 anos é **notificação compulsória imediata** e deve ser investigada como possível poliomielite até afastar (coleta de fezes). A doença está **erradicada** no Brasil, mas a **queda de cobertura** ameaça reintrodução.`},

  {h:"3. Contraindicações verdadeiras × falsas", c:`**Verdadeiras:**
- Reação **anafilática** a dose anterior ou a componente da vacina.
- Para **vacinas vivas:** imunodepressão grave e gestação.
- **Encefalopatia** nos 7 dias após dose de componente **pertussis** contraindica novas doses de pertussis (usar dupla sem o componente).

**Falsas (NÃO contraindicam — vacinar):**
- Doença febril **leve**, uso de **antibiótico**, fase de convalescença.
- **Prematuridade** (vacinar pela **idade cronológica**; HepB ao nascer conforme peso/condição).
- Aleitamento; contato domiciliar com gestante/imunodeprimido (para a maioria das vacinas).
- História familiar de eventos, alergia não anafilática.`},

  {h:"4. Intervalos, atraso e situações especiais", c:`- **Atraso vacinal:** não reinicia esquema — completa o que falta ("dose dada é dose contada"), respeitando intervalos mínimos.
- **Prematuro/baixo peso:** BCG geralmente ao atingir **2 kg**; hepatite B ao nascer conforme protocolo.
- **Imunodeprimidos e contatos:** priorizar vacinas inativadas; proteger o paciente vacinando os conviventes (ex.: influenza, tríplice viral nos contatos suscetíveis).
- **Coadministração:** a maioria pode ser dada no mesmo dia; vivas parenterais não coincidentes exigem 30 dias de intervalo.`},

  {h:"5. Eventos adversos pós-vacinação (EAPV)", c:`Registrar e **notificar** EAPV. Pontos cobrados:
- **Episódio hipotônico-hiporresponsivo** e febre alta após pertussis: em geral **não** contraindicam doses futuras (avaliar caso a caso; considerar acelular).
- **Reação anafilática** a uma vacina contraindica **aquela** vacina.
- Invaginação intestinal tem associação temporal com **rotavírus** — respeitar as **idades máximas** de administração das doses.
- Conduta habitual: manter o calendário sempre que possível, orientar sintomáticos e notificar.`},
 ],
 flashcards: [
  {p:"Doença febril leve, uso de antibiótico e prematuridade contraindicam vacina?", r:"Não — são falsas contraindicações; deve-se vacinar."},
  {p:"Vacinas vivas atenuadas de rotina na infância (exemplos)?", r:"BCG, rotavírus, febre amarela, tríplice/tetra viral, varicela."},
  {p:"Prematuro: vacinar por qual idade?", r:"Idade cronológica (não a corrigida)."},
  {p:"PFA em menor de 15 anos — conduta de saúde pública?", r:"Notificação compulsória imediata e investigar poliomielite (coleta de fezes)."},
  {p:"Atraso vacinal: reinicia o esquema?", r:"Não — completa as doses faltantes; dose dada é dose contada."},
 ],
 pegadinhas: [
  "Doença febril LEVE, uso de antibiótico e prematuridade NÃO contraindicam vacinar.",
  "Prematuro vacina pela idade cronológica; BCG em geral ao atingir 2 kg.",
  "VOP é vírus vivo (risco raro de pólio vacinal); VIP é inativada — o Brasil usa esquema só com VIP.",
  "Paralisia flácida aguda em <15 anos = notificação imediata e investigar poliomielite.",
  "Vacinas vivas: cuidado em imunodeprimido grave e gestante; inativadas são seguras.",
  "Atraso não reinicia esquema — completa o que falta.",
 ],
 diretrizes: [
  "Calendário Nacional de Vacinação — PNI/Ministério da Saúde (versão vigente).",
  "SBIm — Calendários de vacinação; SBP — Documentos Científicos (Imunizações).",
  "MS — Guia de Vigilância em Saúde (paralisia flácida aguda / poliomielite) e Manual de EAPV.",
 ],
 questoes: [
  {foco:"Contraindicação verdadeira × falsa",
   enunciado:"Lactente de 3 meses comparece para vacinação com coriza e temperatura de 37,6 °C, em uso de amoxicilina por otite. Qual a conduta?",
   alternativas:{a:"Adiar todas as vacinas até terminar o antibiótico",b:"Vacinar normalmente conforme o calendário",c:"Contraindicar vacinas vivas para sempre",d:"Só vacinar após 30 dias sem sintomas"},
   correta:"b",
   comentario:"Doença febril leve e uso de antibiótico NÃO contraindicam vacinação — são falsas contraindicações. O lactente deve ser vacinado normalmente para não perder oportunidade. Só se adia em doença moderada a grave. Não há razão para contraindicar vacinas vivas de forma permanente. Perder a janela por quadros banais reduz cobertura — justamente o que aumenta o risco de doenças como o sarampo e a poliomielite."},
  {foco:"Tipo de vacina / imunodeprimido",
   enunciado:"Criança com imunodeficiência celular grave precisa atualizar vacinas. Qual está, em regra, CONTRAINDICADA?",
   alternativas:{a:"Hepatite B",b:"Pneumocócica conjugada",c:"VIP (poliomielite inativada)",d:"Tríplice viral (sarampo, caxumba, rubéola)"},
   correta:"d",
   comentario:"A tríplice viral (SCR) é de vírus VIVO atenuado e, em regra, contraindicada na imunodepressão grave (assim como BCG, rotavírus, febre amarela, varicela). Hepatite B, pneumocócica conjugada e VIP são inativadas/subunidades e seguras nesses pacientes. Reconhecer viva × inativada resolve a questão. Contatos podem precisar de estratégias de proteção (vacinar conviventes com vacinas seguras)."},
  {foco:"Paralisia flácida aguda / pólio",
   enunciado:"Criança de 5 anos evolui, após quadro febril, com perda súbita de força e flacidez em um membro, reflexos diminuídos e sensibilidade preservada. Qual conduta de saúde pública é obrigatória?",
   alternativas:{a:"Notificação compulsória imediata e investigação de poliomielite",b:"Apenas observação domiciliar",c:"Alta sem notificação por ser quadro viral",d:"Iniciar corticoide e dispensar investigação"},
   correta:"a",
   comentario:"Toda paralisia flácida aguda em menor de 15 anos é evento de notificação compulsória IMEDIATA e deve ser investigada como possível poliomielite até que se afaste (coleta de fezes para isolamento viral). A poliomielite está erradicada no Brasil, mas a vigilância é mantida porque a queda de cobertura vacinal ameaça reintrodução. Observar em casa, dar alta sem notificar ou tratar sem investigar violam o protocolo de vigilância."},
 ]
},

"PED|Oncologia / hemato-onco": {
 titulo: "Oncologia pediátrica e sinais de alerta hemato-oncológicos",
 half: "PED",
 resumo: "O objetivo é reconhecer cedo os sinais de alerta que exigem investigação rápida: leucocoria (retinoblastoma), massa abdominal (neuroblastoma × Wilms) e o quadro de leucemia. Cada um tem uma pista e um exame que confirma.",
 secoes: [
  {h:"1. Panorama e sinais de alerta gerais", c:`O câncer é causa importante de morte por doença na infância, e o **diagnóstico precoce** muda o prognóstico. Sinais de alerta que devem acender o alarme oncológico e acelerar a investigação:
- Palidez progressiva, **febre prolongada** sem foco, sangramentos/petéquias.
- **Dor óssea** que desperta à noite, claudicação sem trauma.
- **Massa** ou linfonodomegalia que cresce, hepatoesplenomegalia.
- **Leucocoria** (reflexo branco à pupila), estrabismo de início recente.
- Cefaleia matinal com vômitos, alterações neurológicas/visuais, aumento do perímetro cefálico.
- Perda de peso inexplicada.`},

  {h:"2. Leucemia linfoblástica aguda (LLA)", c:`Neoplasia **mais comum** da infância (pico 2–5 anos). A infiltração medular gera **falência medular**: anemia (palidez, fadiga), **neutropenia** (febre, infecções) e **plaquetopenia** (petéquias, sangramentos), além de **dor óssea**, hepatoesplenomegalia e adenomegalia; pode haver massa mediastinal (mais na LLA-T).

- **Hemograma** levanta a suspeita (citopenias, blastos), mas a **confirmação é o MIELOGRAMA** (aspirado de medula) com imunofenotipagem e citogenética/molecular, que definem o subtipo e o risco.
- Fatores de bom prognóstico: idade 1–10 anos, leucometria baixa ao diagnóstico, LLA-B comum, certas alterações citogenéticas, boa resposta precoce.
- Cuidado com a **síndrome de lise tumoral** ao iniciar tratamento (hidratação, alopurinol/rasburicase).`},

  {h:"3. Retinoblastoma", c:`Tumor intraocular maligno mais comum da infância (lactente/pré-escolar). Sinal clássico: **leucocoria** — reflexo pupilar **branco** (notado em fotos com flash), traduzindo perda do **reflexo vermelho**; pode haver estrabismo.

- Conduta: **avaliação oftalmológica urgente** (fundoscopia sob midríase / exame sob anestesia) e imagem; **é emergência oncológica**.
- Pode ser **hereditário** (mutação RB1, frequentemente **bilateral**) — indicar aconselhamento genético.
- O **teste do reflexo vermelho** na puericultura existe justamente para captar isso cedo; reflexo alterado exige encaminhamento imediato.`},

  {h:"4. Neuroblastoma × tumor de Wilms", c:`Ambos aparecem como **massa abdominal** na criança pequena; diferenciá-los é ponto de prova:
- **Neuroblastoma:** origem na crista neural (adrenal/cadeia simpática). Massa que costuma **cruzar a linha média**, com **calcificações**, elevação de **catecolaminas urinárias (VMA/HVA)**; pode ter síndromes paraneoplásicas (**opsoclonus-mioclonus**, "olhos dançantes"), hipertensão, nódulos subcutâneos e metástases (medula, osso, fígado, pele). Marca da agressividade: amplificação de **N-MYC**.
- **Tumor de Wilms (nefroblastoma):** tumor **renal**, geralmente em criança um pouco maior (2–5 anos), massa que **não costuma cruzar a linha média**, às vezes com hematúria/HAS; associa-se a síndromes (WAGR, Beckwith-Wiedemann). **Evitar palpação abdominal repetida** (risco de ruptura).`},

  {h:"5. Outros a lembrar", c:`- **Tumores do SNC** (2º grupo mais comum): cefaleia matinal com vômitos, ataxia, sinais focais, macrocefalia no lactente.
- **Linfomas** (Hodgkin e não-Hodgkin, ex.: Burkitt abdominal de crescimento rápido).
- **Sarcomas** (rabdomiossarcoma, osteossarcoma/Ewing — dor óssea e massa).
- **Púrpura** e citopenias podem ser leucemia — não rotular como PTI sem excluir blastos/medula quando há sinais atípicos (dor óssea, hepatoesplenomegalia, outras citopenias).`},
 ],
 flashcards: [
  {p:"Leucocoria em lactente = ?", r:"Retinoblastoma até prova em contrário → oftalmologia urgente (emergência oncológica)."},
  {p:"O que confirma leucemia?", r:"Mielograma (aspirado de medula) com imunofenotipagem — o hemograma só levanta a suspeita."},
  {p:"Massa abdominal que cruza a linha média + catecolaminas urinárias altas?", r:"Neuroblastoma (VMA/HVA; pode ter opsoclonus-mioclonus)."},
  {p:"Cuidado no exame do tumor de Wilms?", r:"Evitar palpação abdominal repetida (risco de ruptura)."},
  {p:"Síndrome paraneoplásica típica do neuroblastoma?", r:"Opsoclonus-mioclonus (olhos dançantes)."},
 ],
 pegadinhas: [
  "Leucocoria (reflexo branco/perda do reflexo vermelho) = retinoblastoma → oftalmo urgente.",
  "Leucemia se confirma por mielograma; hemograma só levanta a suspeita.",
  "Neuroblastoma tende a cruzar a linha média e eleva catecolaminas urinárias (VMA/HVA); Wilms costuma não cruzar.",
  "No tumor de Wilms, evitar palpação abdominal repetida (risco de ruptura).",
  "Dor óssea que desperta à noite + citopenias em criança = investigar leucemia.",
  "Cefaleia matinal com vômitos + sinais focais/ataxia na criança = pensar em tumor de SNC.",
 ],
 diretrizes: [
  "SBP — Documentos Científicos (Oncologia pediátrica; sinais de alerta) e SBOP — diagnóstico precoce.",
  "Ministério da Saúde — Diagnóstico precoce do câncer na criança e no adolescente.",
  "Materiais do Drive do Vinicius (miscelânea/oncologia pediátrica) quando o tema casar (ver materiais_drive.md).",
 ],
 questoes: [
  {foco:"Leucocoria / retinoblastoma",
   enunciado:"Mãe de menina de 18 meses nota, em fotos com flash, um reflexo esbranquiçado em uma pupila; na consulta, o reflexo vermelho está ausente nesse olho. Qual a conduta?",
   alternativas:{a:"Reavaliar em 6 meses",b:"Encaminhamento oftalmológico urgente por suspeita de retinoblastoma",c:"Prescrever colírio e alta",d:"Solicitar apenas hemograma"},
   correta:"b",
   comentario:"Leucocoria (reflexo branco/ausência do reflexo vermelho) é o sinal clássico do retinoblastoma e uma emergência oncológica: exige encaminhamento oftalmológico urgente para fundoscopia sob midríase/exame sob anestesia e imagem. Reavaliar em meses atrasa um tumor que ameaça a visão e a vida e pode ser bilateral/hereditário. Colírio/alta e hemograma isolado não abordam a lesão intraocular. O teste do reflexo vermelho na puericultura é justamente para pegar isso cedo."},
  {foco:"Confirmação da leucemia",
   enunciado:"Menino de 4 anos com palidez, febre, petéquias, dor óssea e hepatoesplenomegalia; hemograma com anemia, plaquetopenia e blastos. Qual exame confirma o diagnóstico?",
   alternativas:{a:"Mielograma (aspirado de medula óssea)",b:"Nova coleta de hemograma em 30 dias",c:"Ultrassonografia abdominal",d:"Dosagem de ferritina"},
   correta:"a",
   comentario:"O quadro é altamente sugestivo de leucemia aguda; a confirmação diagnóstica é o mielograma (aspirado de medula óssea), com imunofenotipagem e citogenética para classificar e definir prognóstico/tratamento. O hemograma levanta a suspeita (citopenias + blastos), mas não confirma nem substitui a medula. Repetir hemograma atrasa. Ultrassom e ferritina não fazem o diagnóstico. Dor óssea que desperta à noite com citopenias é bandeira clássica."},
  {foco:"Neuroblastoma × Wilms",
   enunciado:"Criança de 2 anos com massa abdominal que cruza a linha média, calcificações à imagem e catecolaminas urinárias (VMA/HVA) elevadas. Qual o diagnóstico mais provável?",
   alternativas:{a:"Tumor de Wilms (nefroblastoma)",b:"Neuroblastoma",c:"Linfoma de Burkitt",d:"Hepatoblastoma"},
   correta:"b",
   comentario:"Massa que cruza a linha média, com calcificações e elevação de catecolaminas urinárias (VMA/HVA), aponta para neuroblastoma (tumor da crista neural/adrenal e cadeia simpática), que pode cursar com síndrome opsoclonus-mioclonus. O tumor de Wilms é renal, geralmente NÃO cruza a linha média e não eleva catecolaminas — e deve-se evitar palpação repetida pelo risco de ruptura. Burkitt e hepatoblastoma têm apresentações distintas. A dupla “cruza a linha média + catecolaminas” fecha neuroblastoma."},
 ]
},

};

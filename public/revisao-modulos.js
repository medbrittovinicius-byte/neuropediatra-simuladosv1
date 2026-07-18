/* Módulos de estudo aprofundado — Revisão Ativa.
   Chave = domínio clínico (mesma classificação de domainOf: "HALF|Nome").
   Cada módulo: resumo, secoes[{h,c}], pegadinhas[], diretrizes[], flashcards[{p,r}] (opcional),
   questoes[{enunciado, alternativas{a,b,c,d}, correta, comentario, foco}].
   Ampliar aos poucos (mais domínios podem ser acrescentados aqui). */
window.REVISAO_MODULOS = {

/* ===================== NEUROLOGIA ===================== */

"NEURO|Vertigem / síndromes vestibulares": {
 titulo: "Vertigem e síndromes vestibulares",
 half: "NEURO",
 resumo: "O que a banca cobra (e onde você mais erra) é separar vertigem periférica de central. O eixo é sempre: protocolo HINTS, características do nistagmo e a manobra certa para cada canal.",
 secoes: [
  {h:"Visão geral", c:`Vertigem é a ilusão de movimento (rotatório) — diferente de pré-síncope (escurecimento, iminência de desmaio, origem cardiovascular), desequilíbrio (instabilidade de marcha) e tontura inespecífica. A primeira divisão prática é topográfica: periférica (labirinto e nervo vestibular) × central (tronco encefálico e cerebelo). A vertigem central é a que "não se pode perder", porque pode ser um AVC de fossa posterior se apresentando só como tontura.`},
  {h:"Como diferenciar periférico × central — protocolo HINTS", c:`HINTS = Head Impulse (teste do impulso cefálico), Nystagmus (nistagmo) e Test of Skew (desvio skew). PERIFÉRICO: impulso cefálico POSITIVO (há sacada de correção ao girar rápido a cabeça), nistagmo unidirecional, horizonto-torcional, que bate para o lado sadio e é inibido pela fixação do olhar, e sem desvio skew. CENTRAL: impulso cefálico NORMAL (negativo) numa vertigem aguda contínua, nistagmo que muda de direção conforme o olhar, ou vertical/puramente torcional, e presença de skew. Regra de ouro contraintuitiva: em síndrome vestibular aguda, impulso cefálico NORMAL sugere causa central (AVC), não tranquiliza.`},
  {h:"Os principais diagnósticos", c:`VPPB: crises de segundos, desencadeadas por mudança de posição da cabeça, sem sintoma auditivo — a causa mais comum. Neurite vestibular: vertigem aguda CONTÍNUA por dias, impulso cefálico positivo, sem hipoacusia. Doença de Ménière: crises de minutos a horas com a TRÍADE hipoacusia neurossensorial flutuante + zumbido + plenitude aural. Migrânea vestibular: episódios recorrentes em paciente com enxaqueca, SEM hipoacusia persistente. AVC de fossa posterior: fatores de risco vascular, sinais centrais no HINTS, às vezes cefaleia/ataxia.`},
  {h:"Manobras diagnósticas e conduta", c:`A manobra depende do canal: Dix-Hallpike diagnostica o canal POSTERIOR (o mais comum) e trata-se com a manobra de Epley; o canal HORIZONTAL usa o head-roll (Pagnini-McClure) e trata-se com a manobra de barbecue (rotação em log). O tratamento da VPPB é o reposicionamento (manobra), não medicação — supressores vestibulares só aliviam a fase aguda e atrapalham a compensação se usados por muito tempo. Neurite vestibular: corticoide precoce + reabilitação. Ménière: restrição de sódio, diurético, sintomáticos; casos refratários, gentamicina intratimpânica. Migrânea vestibular: profilaxia de enxaqueca. Suspeita central → RM com difusão (a TC é ruim para fossa posterior e para isquemia aguda).`},
 ],
 pegadinhas: [
  "Dix-Hallpike é para o canal POSTERIOR; canal horizontal usa head-roll (Pagnini-McClure) — usar a manobra errada dá teste falso-negativo.",
  "Vertigem aguda contínua com impulso cefálico NORMAL = suspeitar de AVC (central), não relaxar.",
  "TC de crânio tem baixa sensibilidade para isquemia de fossa posterior nas primeiras horas — o exame é RM com difusão.",
  "Sem hipoacusia não é Ménière: pense migrânea vestibular ou VPPB.",
  "Betaistina e flunarizina não são primeira linha da VPPB — o tratamento é a manobra de reposicionamento.",
 ],
 diretrizes: [
  "Adams & Victor — cap. “Deafness, Dizziness, and Disorders of Equilibrium”.",
  "Critérios da Bárány Society (VPPB, migrânea vestibular, Ménière).",
  "Arquivos de Neuro-Psiquiatria (ABN) — buscar “HINTS” / “vestibular neuritis”: https://www.scielo.br/j/anp/",
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
   enunciado:"Mulher de 40 anos com enxaqueca desde a adolescência apresenta episódios recorrentes de vertigem de minutos a horas, metade com cefaleia e fotofobia, sem qualquer perda auditiva; audiometria intercrise normal. Qual o diagnóstico e a conduta?",
   alternativas:{a:"Doença de Ménière; restrição de sal e diurético",b:"VPPB; manobra de Epley",c:"Migrânea vestibular; profilaxia de enxaqueca",d:"Neurite vestibular; corticoide"},
   correta:"c",
   comentario:"Sem hipoacusia não é Ménière (que exige a tríade hipoacusia flutuante + zumbido + plenitude aural). O quadro recorrente, em paciente com enxaqueca, com sintomas migranosos em parte das crises e audição preservada, é migrânea vestibular, tratada com profilaxia da enxaqueca (propranolol, topiramato, amitriptilina). VPPB dura segundos e é posicional; neurite vestibular é episódio único, agudo e contínuo por dias. A audiometria normal é a chave que separa da Ménière."},
 ]
},

"NEURO|Neuroimunologia (EM / encefalites / NMO)": {
 titulo: "Neuroimunologia — desmielinizantes e encefalites autoimunes",
 half: "NEURO",
 resumo: "Esclerose múltipla, NMO, ADEM e encefalites autoimunes (anti-NMDA, lúpica) formam um diferencial que a banca adora. A chave é reconhecer a pista de cada uma: disseminação no tempo/espaço, anti-AQP4, consumo de complemento.",
 secoes: [
  {h:"Esclerose múltipla (EM)", c:`Doença desmielinizante do SNC, mulher jovem, com surtos de déficit neurológico que remitem. O conceito central é a DISSEMINAÇÃO NO TEMPO E NO ESPAÇO (critérios de McDonald): lesões em múltiplos sítios típicos (periventricular, justacortical, infratentorial, medular) surgidas em momentos diferentes. Apoio: bandas oligoclonais no líquor e RM. Surto agudo → corticoide (pulsoterapia); doença → terapia modificadora (ex.: acetato de glatirâmer, interferon, e agentes de alta eficácia).`},
  {h:"Neuromielite óptica (NMO/anti-AQP4)", c:`Principal diferencial da EM. Cursa com neurite óptica (frequentemente grave/bilateral) e mielite longitudinalmente extensa (≥3 segmentos), anticorpo anti-aquaporina-4 positivo. Pegadinha decisiva: tratar como EM PIORA a NMO — interferon-beta e alguns modificadores da EM agravam. O tratamento do surto é corticoide/plasmaférese e a manutenção é imunossupressão (ex.: rituximabe).`},
  {h:"ADEM", c:`Encefalomielite aguda disseminada: quadro monofásico, frequentemente pós-infeccioso/pós-vacinal, mais em crianças, com encefalopatia (rebaixamento/confusão) + lesões multifocais de substância branca. Diferencia-se da EM por ser monofásico e cursar com encefalopatia. Tratamento: corticoide em pulso (± imunoglobulina/plasmaférese).`},
  {h:"Encefalites autoimunes (anti-NMDA × lúpica)", c:`Mulher jovem com psicose/alteração comportamental subaguda, crises e, na anti-NMDA, discinesias orofaciais e disautonomia, com associação a teratoma de ovário; complemento normal, anticorpo anti-NMDA no líquor. Já a encefalite lúpica (LES neuropsiquiátrico) tem a pista do CONSUMO DE COMPLEMENTO (C3/C4 baixos) com FAN/anti-dsDNA e clínica sistêmica de lúpus. O consumo de complemento é o divisor de águas entre as duas.`},
 ],
 pegadinhas: [
  "“Disseminação no tempo e no espaço” é a frase-chave dos critérios de McDonald (EM) — decore literalmente.",
  "Tratar NMO como esclerose múltipla (interferon-beta) PIORA a doença — sempre dosar anti-AQP4 antes.",
  "ADEM = monofásico + encefalopatia; EM = recorrente sem encefalopatia obrigatória.",
  "Complemento baixo (C3/C4) na encefalite = pense lúpus (não anti-NMDA, que tem complemento normal).",
  "Anti-NMDA em mulher jovem: rastrear teratoma de ovário.",
 ],
 diretrizes: [
  "Adams & Victor — cap. “Multiple Sclerosis and Allied Demyelinating Diseases”.",
  "PCDT de Esclerose Múltipla (Ministério da Saúde/BVSMS).",
  "Tratado ABN — Seção de Neuroimunologia; Arquivos de Neuro-Psiquiatria (“autoimmune encephalitis”, “NMOSD”).",
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
   comentario:"O consumo de complemento (C3/C4 baixos) com FAN reagente é a pista da encefalite lúpica (lúpus neuropsiquiátrico). A encefalite anti-NMDA dá psicose/crises semelhantes, mas com complemento NORMAL e, muitas vezes, discinesias orofaciais e teratoma de ovário. A esclerose múltipla não causa quadro psicótico agudo inaugural nem consumo de complemento. A herpética é febril, aguda, com acometimento temporal e PCR+ para HSV. Tratamento do LES neuropsiquiátrico: pulso de metilprednisolona + imunossupressor (ciclofosfamida)."},
  {foco:"McDonald / disseminação no tempo e espaço",
   enunciado:"Mulher de 29 anos com episódio de neurite óptica agora e história, há 3 meses, de dormência em membros que resolveu sozinha; RM com lesões periventriculares e medulares. Qual conceito confirma o diagnóstico de esclerose múltipla?",
   alternativas:{a:"Positividade para anti-aquaporina-4",b:"Disseminação no tempo e no espaço",c:"Encefalopatia com lesão monofásica",d:"Consumo de complemento sérico"},
   correta:"b",
   comentario:"O diagnóstico de EM se apoia na disseminação no tempo (surtos em momentos diferentes) e no espaço (lesões em sítios típicos distintos) — os critérios de McDonald. O anti-AQP4 positivo apontaria NMO, não EM. Encefalopatia monofásica sugere ADEM. Consumo de complemento remete a lúpus. Bandas oligoclonais no líquor apoiam, mas o conceito-chave cobrado é a dupla disseminação temporal e espacial."},
 ]
},

"NEURO|Medula / cauda equina": {
 titulo: "Medula, cauda equina e mielopatias",
 half: "NEURO",
 resumo: "O ponto de prova é reconhecer a emergência (síndrome da cauda equina / compressão medular), pedir o exame certo (RM) e diferenciar cauda equina de cone medular e de mielopatia compressiva.",
 secoes: [
  {h:"Síndrome da cauda equina — emergência", c:`Compressão das raízes lombossacras abaixo do cone. Quadro: dor lombar com irradiação, fraqueza de membros inferiores, anestesia “em sela” (períneo), retenção urinária com gotejamento, arreflexia aquileia. É emergência neurocirúrgica: exame de escolha é RM de coluna lombossacra (não TC, não eletroneuromiografia), e a descompressão precoce previne sequela permanente (incontinência).`},
  {h:"Cauda equina × cone medular", c:`Cauda equina: acometimento de raízes (neurônio motor inferior) — arreflexia, fraqueza assimétrica, dor radicular intensa, retenção urinária mais tardia. Cone medular: lesão do segmento sacral da medula — sintomas mais simétricos, disfunção esfincteriana e sexual precoce, e pode haver sinais de neurônio motor superior. Diferenciar orienta a topografia e a urgência.`},
  {h:"Mielopatia cervical espondilótica", c:`Causa comum de mielopatia no idoso: marcha espástica progressiva, mãos “desajeitadas”, sinais de neurônio motor superior abaixo da lesão (hiper-reflexia, Babinski, Hoffmann) com neurônio motor inferior no nível. Diferencial importante com ELA (esta NÃO tem alteração sensitiva nem nível sensitivo). RM cervical confirma a compressão; casos progressivos são cirúrgicos.`},
  {h:"Red flags e outras causas", c:`Sinais de alarme da dor lombar: déficit neurológico progressivo, retenção/incontinência, anestesia em sela, febre, perda ponderal, câncer conhecido, uso de drogas IV. Compressão medular metastática (ex.: próstata, mama) dá nível sensitivo e dor que piora deitado — RM de toda a coluna + corticoide em dose alta + radioterapia/cirurgia. Em área endêmica, lembrar da mielorradiculopatia esquistossomótica.`},
 ],
 pegadinhas: [
  "Anestesia em sela + retenção urinária + dor lombar = cauda equina até prova em contrário → RM URGENTE.",
  "O exame de escolha é RM, não TC nem eletroneuromiografia.",
  "Mielopatia cervical tem alteração sensitiva/nível sensitivo; ELA NÃO — esse é o diferencial.",
  "Compressão medular metastática: corticoide em alta dose imediatamente, sem esperar a RT.",
  "Dor lombar que piora deitado/à noite e desperta o paciente é bandeira vermelha.",
 ],
 diretrizes: [
  "Adams & Victor — caps. “Diseases of the Spinal Cord” e “Pain in the Back, Neck, and Extremities”.",
  "Sanvito — síndromes medulares e topografia.",
  "MS — PNPIC/PICS (dor lombar crônica na APS): https://www.gov.br/saude/pt-br/composicao/saps/pics",
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
 resumo: "Cobre-se o reconhecimento do padrão (Alzheimer, vascular, corpos de Lewy, frontotemporal), o manejo escalonado dos sintomas cognitivos e comportamentais e as causas potencialmente reversíveis (como a hidrocefalia de pressão normal).",
 secoes: [
  {h:"Doença de Alzheimer", c:`Declínio insidioso de memória episódica e funcionalidade, com MEEM alterado e exames laboratoriais normais. Confirmação por biomarcadores (beta-amiloide e tau no líquor / PET). Tratamento cognitivo inicial: anticolinesterásico (donepezila, rivastigmina, galantamina); nas fases moderada-grave, memantina. Sintomas comportamentais: PRIMEIRO medidas não farmacológicas (ambiente, rotina, cuidador) — antipsicótico só se risco, na menor dose e menor tempo.`},
  {h:"Diferenciais importantes", c:`Demência vascular: início/curso em degraus, fatores de risco vascular, achados focais. Corpos de Lewy: flutuação cognitiva, alucinações visuais precoces e parkinsonismo — grande sensibilidade a antipsicóticos (evitar). Frontotemporal (variante comportamental): mudança de personalidade/desinibição e apatia predominando sobre a memória, em pacientes mais jovens. Delirium: agudo, flutuante, com alteração da atenção — sempre excluir antes de rotular demência.`},
  {h:"Causas reversíveis (não perder)", c:`Hidrocefalia de pressão normal: tríade de Hakim-Adams (distúrbio de marcha “magnética” + incontinência urinária + declínio cognitivo), melhora após tap test (punção de alívio) e tratada com derivação ventriculoperitoneal. Outras reversíveis: hipotireoidismo, deficiência de B12, neurossífilis, depressão (pseudodemência), hematoma subdural crônico. Sempre investigar antes de fechar demência degenerativa.`},
 ],
 pegadinhas: [
  "Sintoma comportamental na demência: primeira linha é NÃO farmacológica; antipsicótico só se necessário, dose baixa, tempo curto.",
  "Demência com corpos de Lewy: hipersensibilidade a antipsicóticos — evitar (podem causar rigidez grave).",
  "Hidrocefalia de pressão normal é reversível: tríade de Hakim-Adams + resposta ao tap test → derivação.",
  "Excluir delirium (agudo, atencional) e causas reversíveis (B12, TSH, sífilis) antes de rotular demência.",
  "Na frontotemporal, muda a personalidade/comportamento antes da memória — e o paciente é mais jovem.",
 ],
 diretrizes: [
  "Adams & Victor — cap. “Dementia and the Neurology of Aging”.",
  "PCDT da Doença de Alzheimer (Ministério da Saúde/BVSMS).",
  "Tratado ABN — Seção de Neurologia Cognitiva e do Comportamento.",
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
 resumo: "Domínio que se sobrepõe à UTI: doutrina de Monro-Kellie, tríade de Cushing, escalonamento do tratamento da HIC, quando NÃO puncionar e princípios de morte encefálica.",
 secoes: [
  {h:"Fisiopatologia — Monro-Kellie", c:`O crânio é uma caixa rígida com três compartimentos (parênquima, sangue, liquor). Aumento de um exige redução de outro; esgotada a complacência, a pressão intracraniana dispara. Sinais de HIC: cefaleia que piora deitado/manhã, vômitos, papiledema, rebaixamento. A tríade de Cushing (hipertensão + bradicardia + respiração irregular) é sinal tardio e grave de HIC/herniação iminente.`},
  {h:"Escalonamento terapêutico da HIC", c:`Começa pelas medidas gerais: cabeceira a 30°, cabeça na linha média, normovolemia, controle de dor/febre/agitação, normocapnia. Depois, osmoterapia (manitol ou salina hipertônica), sedação e, por fim, medidas cirúrgicas (drenagem ventricular, craniectomia descompressiva). A hiperventilação agressiva é medida de resgate temporária (vasoconstrição), não de rotina, pelo risco de isquemia.`},
  {h:"Quando NÃO puncionar (risco de herniação)", c:`Na suspeita de meningite com sinais de HIC/efeito de massa (papiledema, déficit focal, rebaixamento, crises), NÃO fazer a punção lombar antes da neuroimagem — risco de herniação. Nesses casos, colher hemoculturas e iniciar antibiótico empírico (± dexametasona) imediatamente, sem esperar o liquor. A antibioticoterapia não deve ser adiada pela imagem.`},
  {h:"Coma e morte encefálica", c:`A avaliação do coma segue estabilização (ABC) e busca de causas estruturais × metabólicas. Morte encefálica é diagnóstico clínico (coma aperceptivo, ausência de reflexos de tronco, teste de apneia positivo), com pré-requisitos (causa conhecida, exclusão de confundidores como hipotermia e drogas), exames repetidos por examinadores distintos e um exame complementar, conforme a Resolução CFM.`},
 ],
 pegadinhas: [
  "Tríade de Cushing (HAS + bradicardia + respiração irregular) é sinal TARDIO de HIC/herniação.",
  "Primeiro as medidas gerais (cabeceira 30°, normovolemia) ANTES de manitol/salina.",
  "Hiperventilação agressiva não é rotina — vasoconstrição pode causar isquemia; é resgate temporário.",
  "Sinais de HIC/efeito de massa → neuroimagem antes da punção; mas antibiótico empírico NÃO espera a imagem.",
  "Morte encefálica exige causa conhecida e exclusão de hipotermia/drogas/distúrbios metabólicos antes de testar.",
 ],
 diretrizes: [
  "Adams & Victor — caps. “Coma...” e “Disturbances of Cerebrospinal Fluid and Intracranial Pressure”.",
  "Resolução CFM 2.173/2017 (determinação de morte encefálica): https://portal.cfm.org.br/",
  "Tratado ABN — Seção de Neurologia Intensiva/Emergências.",
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
 resumo: "O foco da banca é separar Parkinson idiopático de parkinsonismo secundário (sobretudo farmacológico) e reconhecer tremor essencial, coreias e Wilson. O DAT-scan e a resposta à levodopa ajudam a decidir.",
 secoes: [
  {h:"Doença de Parkinson idiopática", c:`Tremor de repouso assimétrico (“contar moedas”), bradicinesia, rigidez em roda denteada e instabilidade postural tardia, com sintomas não motores (hiposmia, constipação, sonhos vívidos/distúrbio do sono REM, depressão). Boa resposta à levodopa. Casos avançados com flutuações apesar de medicação otimizada podem ir para estimulação cerebral profunda (alvos: núcleo subtalâmico e globo pálido interno).`},
  {h:"Parkinsonismo farmacológico", c:`Segunda causa mais comum de parkinsonismo. Bloqueadores dopaminérgicos (metoclopramida, antipsicóticos, flunarizina/cinarizina) reduzem a atividade D2. Costuma ser mais simétrico e sem os sintomas não motores típicos. Conduta: SUSPENDER o fármaco causador (não iniciar levodopa). O DAT-scan é NORMAL no parkinsonismo farmacológico — é o exame que o separa do Parkinson idiopático.`},
  {h:"Tremor essencial", c:`Tremor postural e de ação (não de repouso), bilateral, com história familiar e melhora com álcool, sem bradicinesia/rigidez. DAT-scan normal. Primeira linha: propranolol ou primidona; casos refratários podem ir para estimulação cerebral profunda do tálamo (VIM).`},
  {h:"Coreias e doença de Wilson", c:`Coreia de Sydenham: pós-estreptocócica, na criança/adolescente, autolimitada. Doença de Huntington: coreia + declínio cognitivo/psiquiátrico + herança autossômica dominante (expansão CAG). Doença de Wilson: no jovem (<40 anos) com distúrbio do movimento + hepatopatia + anéis de Kayser-Fleischer, ceruloplasmina baixa — é tratável (quelantes/zinco), por isso não pode passar.`},
 ],
 pegadinhas: [
  "Parkinsonismo farmacológico: SUSPENDER o fármaco (metoclopramida/antipsicótico), não iniciar levodopa.",
  "DAT-scan NORMAL separa parkinsonismo farmacológico e tremor essencial do Parkinson idiopático.",
  "Tremor essencial é de AÇÃO/postural e melhora com álcool; Parkinson é de REPOUSO.",
  "Jovem com distúrbio do movimento + hepatopatia = investigar Wilson (ceruloplasmina, K-F) — tratável.",
  "Metoclopramida e flunarizina/cinarizina são causas frequentemente esquecidas de parkinsonismo.",
 ],
 diretrizes: [
  "Adams & Victor — caps. “Abnormalities of Movement and Posture” e “Parkinson Disease”.",
  "PCDT da Doença de Parkinson (Ministério da Saúde/BVSMS).",
  "Tratado ABN — Seção de Transtornos do Movimento.",
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
 resumo: "A banca cobra tipo de vacina (viva × inativada), contraindicações reais × falsas, condutas do calendário do PNI e vigilância (paralisia flácida aguda, eventos adversos).",
 secoes: [
  {h:"Tipos de vacina e princípio", c:`Vacinas de agentes VIVOS atenuados (BCG, rotavírus, febre amarela, tríplice viral/SCR, varicela) são, em regra, contraindicadas em imunodeprimidos graves e gestantes. Vacinas INATIVADAS/subunidades/toxoides (hepatite B, pentavalente, VIP, pneumocócica, meningocócica, HPV, dTpa) são seguras nesses grupos. Saber a natureza da vacina resolve a maioria das questões de contraindicação.`},
  {h:"Poliomielite — VOP × VIP", c:`O esquema usa VIP (inativada, injetável) nas primeiras doses e, historicamente, VOP (oral, vírus vivo atenuado) em reforços/campanhas — havendo migração para esquema só com VIP. A VOP pode, raramente, causar poliomielite vacinal (reversão do vírus atenuado). Paralisia flácida aguda em menor de 15 anos é de NOTIFICAÇÃO compulsória imediata e investigação de poliomielite até afastar. A doença está erradicada no Brasil, mas a queda de cobertura ameaça reintrodução.`},
  {h:"Contraindicações verdadeiras × falsas", c:`Verdadeiras: reação anafilática a dose/componente anterior; para vacinas vivas, imunodepressão grave e gestação. FALSAS (não contraindicam): doença febril leve, uso de antibiótico, prematuridade (vacinar pela idade cronológica), contato domiciliar com gestante/imunodeprimido para a maioria das vacinas, aleitamento. Adiar apenas em doença moderada/grave.`},
  {h:"Eventos adversos e conduta", c:`Registrar e notificar eventos adversos pós-vacinação. Episódio hipotônico-hiporresponsivo e febre alta não contraindicam necessariamente doses futuras (avaliar caso a caso). Encefalopatia nos 7 dias após dose de componente pertussis contraindica novas doses de pertussis. Reação anafilática contraindica a mesma vacina. A conduta habitual é manter o calendário, orientar sintomáticos e notificar.`},
 ],
 pegadinhas: [
  "Doença febril LEVE, uso de antibiótico e prematuridade NÃO contraindicam vacinar.",
  "Prematuro vacina pela idade cronológica (não a corrigida), com atenção à hepatite B ao nascer.",
  "VOP é vírus vivo (risco raro de pólio vacinal); VIP é inativada.",
  "Paralisia flácida aguda em <15 anos = notificação imediata e investigar poliomielite.",
  "Vacinas vivas: cuidado em imunodeprimido grave e gestante; inativadas são seguras nesses grupos.",
 ],
 diretrizes: [
  "Calendário Nacional de Vacinação — PNI/Ministério da Saúde (versão vigente).",
  "SBIm e SBP — Documentos Científicos (imunizações).",
  "MS — Guia de Vigilância em Saúde (paralisia flácida aguda / poliomielite).",
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
 resumo: "O ponto é reconhecer os sinais de alerta que exigem investigação rápida: leucocoria (retinoblastoma), massa abdominal (neuroblastoma/Wilms) e o quadro de leucemia. Cada um tem uma pista e um exame.",
 secoes: [
  {h:"Leucemia linfoblástica aguda", c:`Neoplasia mais comum da infância. Suspeitar diante de palidez/anemia, febre e infecções (neutropenia), sangramentos/petéquias (plaquetopenia), dor óssea, hepatoesplenomegalia e linfonodomegalia. O hemograma pode mostrar citopenias e blastos; a confirmação é o MIELOGRAMA (aspirado de medula). Prognóstico geralmente favorável na forma B comum da criança, dependendo de idade, leucometria e citogenética.`},
  {h:"Retinoblastoma", c:`Tumor intraocular do lactente/pré-escolar. Sinal clássico: LEUCOCORIA (reflexo branco à pupila, notado em fotos com flash) — perda do reflexo vermelho; pode haver estrabismo. Conduta: avaliação oftalmológica urgente (fundoscopia sob midríase/exame sob anestesia) e imagem; pode ser hereditário (bilateral). É emergência oncológica — o reflexo vermelho alterado na puericultura exige encaminhamento imediato.`},
  {h:"Neuroblastoma × tumor de Wilms", c:`Ambos se apresentam como massa abdominal na criança pequena. Neuroblastoma: origem na crista neural/adrenal ou cadeia simpática, massa que costuma cruzar a linha média, calcificações, pode ter síndromes paraneoplásicas (opsoclonus-mioclonus, catecolaminas urinárias elevadas — VMA/HVA). Tumor de Wilms (nefroblastoma): massa renal que geralmente NÃO cruza a linha média, em criança um pouco maior; evitar palpação repetida. Imagem e marcadores orientam a diferenciação.`},
  {h:"Sinais de alerta gerais", c:`Perda de peso, febre prolongada sem foco, dor óssea que desperta à noite, massa/adenomegalia que cresce, palidez progressiva, sangramentos e alterações neurológicas focais devem acender o alerta oncológico e acelerar a investigação (hemograma, imagem, encaminhamento). O atraso diagnóstico piora o prognóstico.`},
 ],
 pegadinhas: [
  "Leucocoria (reflexo branco/perda do reflexo vermelho) = retinoblastoma até prova em contrário → oftalmo urgente.",
  "Leucemia se confirma por mielograma; hemograma só levanta a suspeita.",
  "Neuroblastoma tende a cruzar a linha média e tem catecolaminas urinárias (VMA/HVA); Wilms costuma não cruzar.",
  "No tumor de Wilms, evitar palpação abdominal repetida (risco de ruptura).",
  "Dor óssea que desperta à noite + citopenias em criança = investigar leucemia.",
 ],
 diretrizes: [
  "SBP — Documentos Científicos (Oncologia pediátrica; sinais de alerta).",
  "SBOP (Sociedade Brasileira de Oncologia Pediátrica) — diagnóstico precoce.",
  "Ministério da Saúde — Diagnóstico precoce do câncer na criança e no adolescente.",
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

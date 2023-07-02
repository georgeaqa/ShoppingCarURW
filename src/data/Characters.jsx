const CHARACTERS = [
  {
    idCharacter: 1,
    nameCharacter: "KATE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_KATE_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Kate está con nosotros desde el principio. Ella es quien ha acompañado nuestros primeros pasos en el juego, la que permanece a nuestro lado y la que ha reclutado a todos los personajes que forman parte de esta gran aventura. Y si bien es verdad que ha cometido algunos errores, como quedarse con un buen porcentaje de nuestras ventas, proponer precios de recompra cuestionables y dejarse sobornar por una secta interdimensional llamada Oculus, lo cierto es que nadie es perfecto. Por todo ello, debemos prestarle nuestro apoyo en los buenos y malos momentos, y echarle una mano para que pueda librarse de este poder que la carcome. ¡El futuro de Clint City depende de ello!",
    price: 100,
  },
  {
    idCharacter: 2,
    nameCharacter: "MEMENTO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_MEMENTO_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Antes de la invención de los Pillz, antes de Morphun, Clint City era una ciudad más apacible. Tan apacible que Jacob, agente de seguridad encargado de proteger a los miembros del Polit, se sentía inútil en su trabajo. Pero poco a poco, sus empleados se dieron cuenta de su inteligencia, sus capacidades de deducción fuera de lo normal y su increíble memoria... De un simple agente de seguridad, se convierte en confidente y aconseja a los más grandes, hasta el punto en el que su experiencia técnica hizo de él un hombre indispensable, un verdadero... Líder. Para él y su primogénita, todo debería haber ocurrido a las mil maravillas, pero esto era sin contar con el Oculus, atraído por la reciente invención de los Pillz, que encontró la ocasión de generar conflictos en este planeta. Simplemente, el Oculus necesitaba servidores: para empezar... una reclutadora, como por ejemplo su hija. Y luego, un estratega... como Jacob. Tras haber recibido la vida eterna y los poderes de Dounia, Jacob se convirtió en Memento, el ser omnisciente encargado de separar a aquellos que su hija reclutaba. Y el padre y la hija, ignorantes del destino del otro, perdieron la razón al servir a una entidad que supera el entendimiento... ¿Puede que al menos el Oculus esté derrotado?",
    price: 100,
  },
  {
    idCharacter: 3,
    nameCharacter: "GENESIS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_GENESIS_N5_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Cuando creó el universo, el Glibon Dashra Sakrh era un ser complejo con sentimientos contradictorios. Para convertirse en un dios bondadoso, se desprendió de todos sus pecados, que se materializaron en los 7 titanes primordiales. Si bien el ardiente orgullo de Griffonmor y la gélida ira de Ymirah estuvieron a punto de destruir varios mundos, es la gula de Genesis la que representa el mayor peligro. Genesis es un auténtico reciclador que se alimenta de las almas perdidas, consumiendo la razón de sus huéspedes y transformándolos en marionetas incapaces de resistirse a sus impulsos. De este modo, los mundos han sido engullidos por guerras constantes, que dividieron en clanes a sociedades que antes permanecían unidas. Temiendo que Genesis pudiese destruir todo lo que él había creado, el Glibon lo encerró en una dimensión vacía donde debía permanecer eternamente. Pero alguien abrió el portal hacia esta dimensión, liberando a la bestia hambrienta... La influencia de Genesis se percibe cada vez más en las calles de Clint City. Si uno se fija bien, incluso es posible ver cómo sus ojos cósmicos tornan el cielo en rojo sangre. ¡Ha llegado el día! ¡La profecía del 5º mundo por fin se hace realidad!",
    price: 80,
  },
  {
    idCharacter: 4,
    nameCharacter: "PHALLOIDE LD",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_PHALLOIDELD_N4_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Los veteranos de UR la tienen que conocer. Es la Ministra a cargo de la inmigración de Clint City que trabaja 24 horas al día, los 7 días a la semana. ¿Cómo es posible seguir semejante ritmo? Muy fácil, la versión 'Phalloide' de Kate es un robot. A pesar de que su tecnología está anticuada desde hace algunos años, esto no ha afectado en absoluto a su increíble eficacia. Desde hace algunas semanas, el Oculus ha estado interfiriendo en sus circuitos y la actualización parece funcionar. El robot y el superextraterrestre conforman un todo, ¡logrando así que nuestro Phalloide sea legendario!",
    price: 70,
  },
  {
    idCharacter: 5,
    nameCharacter: "STRIKER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_STRIKERCR_N4_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Striker ha aprendido a jugar a fútbol por correspondencia en su piso de 4 metros cuadrados. La televisión y las peleas diarias contra las otras bandas de su barrio lo han convertido en el terror de los estadios. Para quitarse esta mala reputación de encima, no quiere seguir siendo un jugador violento, ¡quiere ser el árbitro mandamás!",
    price: 90,
  },
  {
    idCharacter: 6,
    nameCharacter: "MARINA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_MARINA_N4_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Cuatro veces campeona mundial de gimnasia, Marina tuvo muchas ofertas por parte de los clanes y dudó bastante antes de elegir a los All Stars. Esta mujer de goma no necesita armas ya que usa su cuerpo como herramienta de combate. Animada por Alexei que desde un principio se dio cuenta de su gran potencial, se une al equipo y rápidamente se convierte en un miembro clave para los All Stars.",
    price: 60,
  },
  {
    idCharacter: 7,
    nameCharacter: "LOST HOG",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FANGPICLANG/FANGPICLANG_LOSTHOGCR_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "A pesar de ser guerrero de turbio pasado, Lost Hog ha conseguido ser el cabecilla del Fan Pi Clang. Taciturno, parece tener la facultad de leer el alma de sus discípulos que le profesan su devoción. Depositario del honor del clan, lucha por conseguir la clonación del difunto Bruce Lee que era el único que conocía la técnica del gran sopapo dorado.",
    price: 90,
  },
  {
    idCharacter: 8,
    nameCharacter: "TOKAMAK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FANGPICLANG/FANGPICLANG_TOKAMAK_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "La técnica ancestral de la fusión fortalecería el Fang Pi Clang: dos guerreros de la misma corpulencia y con idéntica fuerza, practicando simétricamente una danza, cuyo mínimo error puede tener consecuencias muy desafortunadas, permitiría obtener un resultado más poderoso que la simple suma de los poderes de los dos participantes en la fusión, una oportunidad de oro para nuestras filas. ¿A qué esperáis? Lee Long y Lost Hog son los 2 guerreros más competentes y cercanos, ¡traedlos de vuelta al monasterio de la Montaña Dorada!",
    price: 100,
  },
  {
    idCharacter: 9,
    nameCharacter: "NOCTEZUMA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HURACAN/HURACAN_NOCTEZUMACR_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Noctezuma, ¡el niño de los esclavos de las minas de oro! Noctezuma, ¡el Hombre que hace Temblar la Tierra! El luchador que ocupa desde ahora el trono de la Pile Tower es quien ha derrocado el régimen dictatorial de Los Santos a base de puñetazos otorgando la libertad a su pueblo. Reunir a las mejores figuras de la lucha libre no es más que el primer paso para librar al planeta de la organización que manipula los países desde la sombra: el Polit.",
    price: 80,
  },
  {
    idCharacter: 10,
    nameCharacter: "QUETZAL",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HURACAN/HURACAN_QUETZALMT_N4_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Arrancado de un letargo de varios siglos, Quetzal, un legendario héroe Santoztec momificado y perteneciente al primer pueblo de Los Santos, ha cerrado un pacto con Noctezuma Cr. El antiguo guerrero ha prometido reunir a los combatientes de Clint City y organizar el torneo del trono de oro en donde desafiará a El Divino... ¡la venganza es un plato que se sirve frío!",
    price: 60,
  },
  {
    idCharacter: 11,
    nameCharacter: "GENERAL",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LAJUNTA/LAJUNTA_GENERALMT_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Nacido en un barrio de chabolas, el General es encarcelado por haber robado cinco mazorcas de maíz transgénico con el único fin de alimentar a su familia. Su gran dominio de la Capoeira le permite sobrevivir en ese infierno. Decidido a acabar con el Polit y su injusta administración, se escapa y empieza su venganza. Así es como nace la rebelde Junta.",
    price: 100,
  },
  {
    idCharacter: 12,
    nameCharacter: "AMIRAL PY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LAJUNTA/LAJUNTA_AMIRALPYCR_N3_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "El pequeño Py, de oficio grumete, se ha unido a La Junta con oscuros propósitos. Efectivamente, enrolarse en la marina es para él la ocasión de surcar los océanos y vivir aventuras locas. También es el medio para conocer a marineros bizcos con los que, supuestamente, formar una tripulación… Ha nacido la leyenda del almirante y los anti-juntistas están asustados.",
    price: 50,
  },
  {
    idCharacter: 13,
    nameCharacter: "ALEC",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RESCUE/RESCUE_ALECMT_N4_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "De niño, a Alec le encantaba burlarse de su vecino, un mequetrefe cuatro-ojos llamado Kenny. Se metió tanto con él que, un día, el mequetrefe se enfadó hasta el punto de transformarse en una antorcha viviente que todo lo destruía a su paso. Devorado por el sentimiento de culpa, Alec se convirtió en el mejor bombero de la ciudad.",
    price: 100,
  },
  {
    idCharacter: 14,
    nameCharacter: "MARCO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RESCUE/RESCUE_MARCOCR_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Su hermano Larry es quien lleva la parte de atrás de la camilla y da las instrucciones mientras que Marco, en la parte de adelante, las sigue. Su trabajo es fácil: llevar la camilla y arremeter contra todo aquel que se encuentre en su camino. Y, a base de golpear a todos los que le molestan, cada vez son menos los que se cruzan en su camino.",
    price: 70,
  },
  {
    idCharacter: 15,
    nameCharacter: "HAVOK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SENTINEL/SENTINEL_HAVOK_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Debajo de su tonelada de músculos y su apariencia de bestia, Havok esconde un corazón romántico y lleno de ternura que late por Chloe, la bella agente de Sentinel. Cuando no está ocupado aplastando las cabezas de sus adversarios, Havok compone hermosos poemas dirigidos a la mujer de su vida.",
    price: 80,
  },
  {
    idCharacter: 16,
    nameCharacter: "HAWK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SENTINEL/SENTINEL_HAWK_N5_HD_673.png",
    },
    idFactions: 3,
    descriptionCharacter:
      "Zlatar ha comprado las tierras de los ancestros de Hawk por una miseria y ha expulsado a todos sus habitantes ya que es el único lugar en el que crecen las nueces gigantes que se utilizan para fabricar las barritas chocolateadas MegaNutz. Para ello, ha contado con la ayuda de políticos corruptos. Indignado por lo sucedido, Hawk se unió a los Sentinel para luchar contra las injusticias y partirle la boca a Nutty, la mascota de las barritas MegaNutz.",
    price: 90,
  },
  {
    idCharacter: 17,
    nameCharacter: "JACKIE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/UPPERS/UPPERS_JACKIEMT_N4_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "El joven Joao nunca se ha sentido bien consigo mismo, hasta que una noche en una fiesta y tras beber demasiado, se da cuenta de que en realidad es la reencarnación de una de las primeras damas de Estados Unidos. Así, a los 19 años, Joao se convierte en Jackie. Sus allegados viven muy mal este cambio, por lo que Jackie los abandona y sólo frecuenta a los Uppers que la convierten en la reina de sus noches.",
    price: 100,
  },
  {
    idCharacter: 18,
    nameCharacter: "ARMANDA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/UPPERS/UPPERS_ARMANDAMT_N3_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Armanda también es conocida como 'la viuda negra', que seduce, despoja y después mata a sus ricos amantes. En un acto de bondad, Armanda perdonó a su última víctima. Pero este medio fracaso puede arruinar su reputación entre los Uppers. Se lanza por tanto a la pelea para rematar su faena…y también a su ex marido. Pero ya no se acuerda de su cara.",
    price: 50,
  },
  {
    idCharacter: 19,
    nameCharacter: "SUM SAM",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BANGERS/BANGERS_SUMSAMCR_N5_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Sum Sam ha sido criado por su abuelita que siempre lo ha mimado mucho. Y es más, quizás haya engordado demasiado por culpa de los platos preparados por la abuelita. Como ya no puede pasar por las puertas demasiado estrechas de la oficina del paro o de las discotecas, sólo se siente aceptado por la banda de los Bangers del que es un incondicional.",
    price: 100,
  },
  {
    idCharacter: 20,
    nameCharacter: "BODENPOWER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BANGERS/BANGERS_BODENPOWERCR_N5_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Bodenpower era un jovencito más bien tímido e introvertido al que sus compañeros de clase miraban de forma extraña. Injustamente recluido en un reformatorio para adolescentes, se da cuenta de que le gusta la vida en comunidad. Una vez liberado, funda una banda para ayudar a todos los incomprendidos del barrio, víctimas de cualquier injusticia.",
    price: 60,
  },
  {
    idCharacter: 21,
    nameCharacter: "DJ KORR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNKZ/JUNKZ_DJKORRMT_N5_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Antiguo primer violín de la orquesta filarmónica de Poldachie-Goldovine, DJ Korr abandonó la música clásica el día en que consiguió su primer sampler. Ahora es capaz de hipnotizar a su público a base de ritmos hardcore y asusta al Polit que ve en este ferviente defensor de las fiestas tecno clandestinas una real amenaza para su autoridad.",
    price: 100,
  },
  {
    idCharacter: 22,
    nameCharacter: "GIBSON",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNKZ/JUNKZ_GIBSONCR_N4_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Para conseguir su fin ultimo (inyectarse el sonido de #DJ Korr cr directamente por intravenoso), Gibson esta dispuesto a modificar su cuerpo de forma radical. Ha intentado muchas veces convencer a los otros Junkz de que la experiencia vale con creces todos los sacrificios que implica pero le ha sido dificil encontrar voluntarios dispuestos a seguirle en esta aventura.",
    price: 70,
  },
  {
    idCharacter: 23,
    nameCharacter: "DON",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/MONTANA/MONTANA_DONCR_N5_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "La historia de Don comienza en las calles. Desde pequeños robos a golpes mayores, Don se ha ido convirtiendo poco a poco en un 'pez gordo' respetado en su barrio, en su ciudad y finalmente en su país. No muestra piedad alguna con sus enemigos y es cruel incluso con sus amigos. Para seguir siendo el 'capo', debe desconfiar de todos y hacerse respetar por medio de su brutalidad y la de sus secuaces.",
    price: 70,
  },
  {
    idCharacter: 24,
    nameCharacter: "LYSE TERIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/MONTANA/MONTANA_LYSETERIAMT_N3_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Los Teria nunca se sintieron orgullosos de su hija. Perversa y naturalmente predispuesta al vicio en todas sus formas, Lyse es la vergüenza de una familia normal de la que acaba por huir. Tras vivir un tiempo en la calle, es reclutada por los Montana que le prometen un brillante porvenir en el crimen… ¡La carrera de Lyse empieza por fin!",
    price: 100,
  },
  {
    idCharacter: 25,
    nameCharacter: "CHARLIE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PUSSYCATS/PUSSYCATS_CHARLIECR_N5_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Charlie posee, desde siempre, el don de ser admirada por sus amigas. Jefa de las majorettes, reina del baile, estudiante brillante y después jefa de empresa, toda su vida ha sido un gran éxito. Sin embargo, tras un matrimonio fallido, Charlie descubre que los hombres sólo la ven como un trofeo. Decide que esto tiene que cambiar y, por supuesto, todas sus amigas la imitan.",
    price: 80,
  },
  {
    idCharacter: 26,
    nameCharacter: "YAYOI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PUSSYCATS/PUSSYCATS_YAYOICR_N4_HD_673.png",
    },
    idFactions: 4,
    descriptionCharacter:
      "Adepta de las artes marciales, de los aparatos y del esclavismo, Yayoï Miyaki es una estudiante japonesa como las demás. Desde que descubre el verdadero espíritu Pussycat, en una fiesta donde pinchaba la exuberante Tania, decide apoyar a estas chicas en sus combates. Está muy unida al clan, y ha conseguido tejer estrechos vínculos con las Pussycats.",
    price: 80,
  },
  {
    idCharacter: 27,
    nameCharacter: "QUEEN NALIAH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ULUWATU/ULUWATU_QUEENNALIAH_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "En circunstancias excepcionales se requieren medidas excepcionales. Con la creciente amenaza del Oculus, #Naliah no puede seguir ignorando sus obligaciones como reina. Tras encerrar a su amante Smokey para estudiar su estado, ahora sabe cómo reconocer a un infiltrado independientemente de cuál sea su fase de transformación. En la actualidad, utiliza sus conocimientos para proteger su reino, especialmente contra los Líderes, cuya traición es cada vez más preocupante. ¿Serán suficientes sus encantos y sabiduría para salvar los océanos? ¡Ojalá termine esta crisis para que pueda volver a tomar el sol en la playa!",
    price: 100,
  },
  {
    idCharacter: 28,
    nameCharacter: "TANAEREVA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ULUWATU/ULUWATU_TANAEREVAMT_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Se dicen muchas cosas de Tanaereva. Según algunos, se trata del único descendiente de los habitantes de la isla de Pascua, mientras que para otros es la reencarnación de Poseidón. En realidad, sólo se han comprobado tres cosas de todo lo que se dice sobre él. Una: que le gusta el surf. Dos: que no le gustan los que contaminan. Tres: que pega realmente fuerte.",
    price: 70,
  },
  {
    idCharacter: 29,
    nameCharacter: "KUWAKA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/KOMBOKA/KOMBOKA_KUWAKACR_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Cuando murió el anciano jefe del archipiélago, su poder fue transmitido a sus 4 hijas, que en aquel entonces no eran más que unas adolescentes. 4 facciones de guerreras se formaron entonces, cada una asumiendo la responsabilidad sobre un aspecto esencial de la vida del clan. Por supuesto, es #Kuwaka, la primogénita, la elegida para dirigir la facción del fuego. ¿Y que hizo ella a partir de ahí, con su temperamento volcánico? Oh, ¡pues nada! Seguro que encontró un medido de inmunizar la piel de posibles quemaduras, inventó una tecnología capaz de transformar la lava en energía viable y extrajo de la cúpula magmática une gigantesca hoja hecha de obsidiana que ahora le sirve de arma... Vaya, si por lo menos no hubiera matado al último hombre del clan por puros celos, sería un digno reemplazo de su padre.",
    price: 80,
  },
  {
    idCharacter: 30,
    nameCharacter: "VOLKAN",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/KOMBOKA/KOMBOKA_VOLKANMT_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "¿Sabes hasta qué punto las has herido? Aquella explosión las dejó sin padres, sin sus hermanos... ¡Para siempre! Me acogieron entre las suyas y por ello les debo la vida Y pasados tantos años, he vuelto para infligir el castigo último: he traído conmigo a 4 hermanas y ellas no os darán tregua, ni tampoco opciones.",
    price: 100,
  },
  {
    idCharacter: 31,
    nameCharacter: "KIKI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ROOTS/ROOTS_KIKIMT_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Arrancado del bosque tropical y de las patas peludas de su mamá, Kiki sufre durante meses en los laboratorios del Polit. Conejillo de indias utilizado para horribles experimentos, este joven primate es liberado del infierno por un comando Roots contrario a la experimentación con animales. Traumatizado por los científicos, Kiki se convierte en un símbolo de esperanza para el clan.",
    price: 100,
  },
  {
    idCharacter: 32,
    nameCharacter: "ATAOUALPET",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/ROOTS/ROOTS_ATAOUALPET_N3_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Siendo bebé, Ataoualpet sobrevivió milagrosamente a un accidente aéreo y fue recogido por una familia de cóndores de la cordillera de los Kandes. Ataoualpet vivió como un pájaro hasta que unos promotores decidieron construir el hotel más alto del mundo justo en el lugar en el que se encontraba su nido. Esto no le gustó nada a Ataoualpet, ¡y decidió cortarles las alas!",
    price: 50,
  },
  {
    idCharacter: 33,
    nameCharacter: "KALINDRA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FROZN/FROZN_KALINDRACR_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Es la mayor del clan Frozn y la madre adoptiva de Tiwi Ld, además de quien toma las decisiones en el clan. Perdió un brazo en una expedición para encontrar a Tiwi Ld, que se había perdido en una tormenta de nieve. Desde ese momento, son inseparables y el pequeño yeti siempre va a espaldas de la anciana y se distrae reparando y mejorando su brazo articulado.",
    price: 70,
  },
  {
    idCharacter: 34,
    nameCharacter: "YMIRAH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FROZN/FROZN_YMIRAHMT_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "'La vida en el planeta estaba al borde la extinción: Ymirah, una criatura con rasgos femeninos y enormes proporciones, llegó a nuestro planeta en el interior de un asteroide Frozn y comenzó su destrucción descontrolada. Nosotros, los yetis, tratamos en vano de detenerla con justicia y determinación. Era invencible, incluso ante la fuerza pura o la magia. Rogamos para que los dioses nos enviaran una señal, y esta fue la tarea de encontrar 3 poderosos artefactos enterrados en lo más profundo del Monte Glatz: un Bastón, un Martillo y un Cristal. Combinando los tres poderes, finalmente era posible infligir daño a Ymirah. ¡Y así lo hicimos! Logramos encerrarla en un glacial y la devolvimos a su sueño eterno. Ese día, en el que el 90% de nuestros semejantes perdieron la vida en combate, lo llamamos Ragnarok. A las futuras generaciones os decimos que tengáis siempre a mano estos artefactos. El desafortunado día en el que Ymirah vuelva a despertar, serán vuestra única esperanza '. - Del tomo Dargohr, 'El Ragnarok'",
    price: 100,
  },
  {
    idCharacter: 35,
    nameCharacter: "ONGH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNGO/JUNGO_ONGHMT_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Armado únicamente de su valentía y su lanzacacahuetes, Ongh no ha vacilado ni un segundo en levantarse el primero contra los intrusos que querían echar a los Jungo de las ruinas del Zoo. Este acto heroico (y el apoyo más que “demostrado” de Chill) lo propulsa a la cabeza de los Jungo.",
    price: 80,
  },
  {
    idCharacter: 36,
    nameCharacter: "SOBEK",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/JUNGO/JUNGO_SOBEK_N5_HD_673.png",
    },
    idFactions: 5,
    descriptionCharacter:
      "Hombre hecho a sí mismo y que dirige diferentes empresas de día, es el Padrino de la mafia Jungo por la noche... Sobek es un caimán de múltiples facetas. Empezó de joven ensuciándose las manos para llegar a donde está, y ahora hace uso de sus esbirros para eliminar a cualquier que pudiera mancillar su imagen pública. Desde que se fue #Ongh Cr, es él quien dirige el zoo tanto a plena luz del día, como desde las sombras. Es mejor no rechazar sus contratos, ya que quien se atreve suele acabar envuelto en un misterioso accidente...",
    price: 90,
  },
  {
    idCharacter: 37,
    nameCharacter: "CORTEZ",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BERZERK/BERZERK_CORTEZMT_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Incluso antes de sufrir la transformación, Cortez ya era una máquina de matar, y entre su fuerza y su machete, no tardó mucho en abrirse pasó hasta convertirse en el líder indiscutible de los Berzerk. No hay nadie (al menos vivo) que pueda decir con certeza qué es lo que hacía aquella noche en el Motel. Lo que no deja lugar a dudas es que estaba hecho para dirigir a un pequeño ejército de guerreros locos llenos de ira… De ahí a crearlo él mismo, sólo había un paso.",
    price: 80,
  },
  {
    idCharacter: 38,
    nameCharacter: "NADIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/BERZERK/BERZERK_NADIA_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "'Tuvimos que valernos por nosotros mismos, mientras tú te divertías... Ahora ya sé dónde te escondes. Prepara tus cuchillas, viejo cobarde, estoy en tu calle'.",
    price: 80,
  },
  {
    idCharacter: 39,
    nameCharacter: "ENIGMA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PARADOX/PARADOX_ENIGMACR_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "El intimidante Alpheus #Enigma es una figura colosal en el mundo del arte contemporáneo y ha sido reclutado por el Polit en calidad de Cuidador para dirigir un lugar experimental, cuyo concepto está a medio camino entre una iglesia y un museo contemporáneo. #Enigma se encarga de conducir a los espíritus enfermos hacia un nuevo destino... una colección de hombres/objetos en lo que será la obra más lograda: el Museo, el lugar de la 'vida eterna'. Nunca concede una entrevista, por principios... ¿no es una paradoja preguntarle a un hombre con múltiples facetas quién es en realidad? Limitaos a verlo como la transgresión de los límites del arte y la terapia tal y como lo conciben los sencillos habitantes de Clint City... es un hombre con una conexión con su ciudad, el dios funerario a los ojos de su clan y la obra de arte de su propio ego.",
    price: 100,
  },
  {
    idCharacter: 40,
    nameCharacter: "NARKE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PARADOX/PARADOX_NARKE_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Alpheus lo ha conseguido todo: ser un estudiante brillante, un artista visionario y el líder del clan. Lo ha conseguido todo, tanto en lo bueno como en lo malo. Pero tiene una debilidad: como le aterroriza que lo rechacen en el amor, ha jurado no sucumbir nunca a lo que considera un sentimiento destructivo. Durante una sesión de terapia Paradox, tuvo la mala suerte de conocer a la más seductora de las pacientes, y también la más manipuladora. Desde su incorporación a las filas del Museo, el tímido #Narké se convirtió rápidamente en el amante secreto del Cuidador, lo que sumió a los Paradox en una gran paranoia, perturbados por la influencia del joven sobre su líder Enigma...",
    price: 90,
  },
  {
    idCharacter: 41,
    nameCharacter: "BLOODH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PIRANAS/PIRANAS_BLOODHMT_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Para dirigir una tripulación como la de los Piranas, hace falta una buena dosis de autoridad, bastante psicología, paciencia y un poco de humor (esto último es opcional). Pero sobre todo, se necesita un sable afilado y una media sonrisa de pocos amigos para que los más tercos entiendan que las órdenes son órdenes.",
    price: 70,
  },
  {
    idCharacter: 42,
    nameCharacter: "YACCANEMBA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/PIRANAS/PIRANAS_YACCANEMBA_N1_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "De vez en cuando, un viejo marinero loco emerge misteriosamente de los mares para ser rescatado por la tripulación de los Piranas. A menudo acaba contando su ridícula y exagerada historia mientras se toma un buen ron o absenta. Pero esta vez, la historia parece real... Yaccanemba afirma ser un mestizo, medio humano, medio Sylth, el último descendiente de los Abyss y el hermanastro olvidado del gran Merweiss. ¡Incluso logró la casi inmortalidad al absorber la magia del Kraken a través de Agglomoth el Eterno! Nadie entendió nada de su relato, pero desde que Sting comprobó que estaba hecho a prueba de balas, todos los Piranas lo toman en serio. Incluso Crook, quien recientemente lo nombró capitán de parte de la flota, por miedo a que pueda ocupar su lugar algún día...",
    price: 90,
  },
  {
    idCharacter: 43,
    nameCharacter: "IMPERA SLOANE",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RAPTORS/RAPTORS_IMPERASLOANECR_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "No escucharéis hablar mucho de los carceleros que guardaban a los presos cuando ocurrió el trágico viaje ya que ninguno de ellos sobrevivió al choque, ni a los reos liberados y bastante rencorosos. ¡Nadie, aparte de Sloane! Esta carcelera de elite es capaz de aplastar con sus propias manos y sin ayuda a los condenados que sueñan con cargársela. Para poder sobrevivir a las amenazas del mundo jurásico, creó un cordón de seguridad a base de sauros capturados y domados con sus cuidados para hacer pedazos toda amenaza; aunque ella sigue siendo el elemento más mortífero del conjunto. Ese escenario se mantiene hasta su célebre enfrentamiento silencioso contra Rex Sweig: se forja entre estos dos increíbles rivales un extraño vínculo, conjugando amor y odio hilvanados por un respeto mutuo que les venía al pelo a ambos. Convertida en Impera Sloane, la carcelera renegada permaneció en un segundo plano cautelarmente, el tiempo necesario para reunir a su horda personal con la que ir a hacer trizas Clint City.",
    price: 80,
  },
  {
    idCharacter: 44,
    nameCharacter: "REX SWEIG",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RAPTORS/RAPTORS_REXSWEIG_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Encerrado sin motivo aparente por el Polit durante veinte años en la celda más aislada de la prisión de Clint City, finalmente acabaron por meter a Sweig en el avión para enviarlo lo más lejos posible. Más que conocido entre los prisioneros, a simple vista no parecía muy peligroso con su look de intelectual encerrado en sí mismo. Pero veinte años de aislamiento físico y mental interrumpidos de manera brusca por el aterrizaje en un mundo perdido dieron lugar a un individuo inquietante... Inteligente, salvaje, manipulador y cruel, Sweig poseía todas las cualidades para dominar con mano de hierro tanto a los criminales de Clint City como a los animales prehistóricos. Convertido en el Rex de los Raptors, para bien o para mal, su temible personalidad se ve intensificada y controlada por su mujer, que resulta igual de despiadada que él. Nadie sabe realmente qué piensa hacer el jefe de los Raptors en Clint City, pero sea lo que sea, seguro que acaba en sangre y lágrimas.",
    price: 80,
  },
  {
    idCharacter: 45,
    nameCharacter: "OLGA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FREAKS/FREAKS_OLGACR_N3_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Ha sido cinco veces ganadora del concurso “La mujer más fuerte de Balgenheim”, y debería haberlo sido la sexta también, si el jurado no hubiera amañado los resultados para favorecer a Hindelga, su rival de toda la vida. Defraudada, aunque con la moral alta, decide unirse a los Freaks para enseñarle a todos que ella es, sin lugar a dudas, la mujer más fuerte del mundo.",
    price: 70,
  },
  {
    idCharacter: 46,
    nameCharacter: "GRUDJ",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/FREAKS/FREAKS_GRUDJMT_N4_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Damas y caballeros, pasen y aplaudan al increíble Grudj, el hombre-estómago capaz de devorar su propio peso en perritos calientes, y no sólo eso, sino de ingerir y digerir cosas de lo más extraño, como papel o metal. No obstante, tenga cuidado y no dejen a sus niños acercarse a su jaula, ya que nunca se sabe…",
    price: 70,
  },
  {
    idCharacter: 47,
    nameCharacter: "BECKY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/COSMOHNUTS/COSMOHNUTS_BECKY_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "Esposa de Beau, madre de Alana y Jacob. Desempleada, fumadora y alcohólica, pasa los días en casa discutiendo con su padre. Terminará dando a luz en el hospital más cercano y siendo acogida por médicos alienígenas en contra de su voluntad. Racista con los pequeños grises, acabará armando un escándalo homicida para, a continuación, huir con su prole.",
    price: 70,
  },
  {
    idCharacter: 48,
    nameCharacter: "RADDEN",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/COSMOHNUTS/COSMOHNUTS_RADDEN_N5_HD_673.png",
    },
    idFactions: 6,
    descriptionCharacter:
      "De estas familias de granjeros, una de ellas fue enviada en primer lugar. Por desgracia, su nave espacial fue víctima de un funesto destino al estrellarse violentamente a su llegada, dejando como único superviviente a Loni, un adolescente con un coraje inquebrantable. Aislamiento total. Soledad absoluta. Esa era su realidad. En el corazón de este planeta hostil, asumió con valentía la gestión del primer rancho, colmado de tristeza por la pérdida de sus padres y de una profunda nostalgia por Elektrozova. De este duro trance emergió como un ser resiliente, ingenioso y con excelentes habilidades manuales. Pero lo que más ardía en su interior era su pasión por el banjo, un instrumento que transformó y sublimó durante los años que pasó allá arriba, en las estrellas. En lo más profundo de su alma, surgió un anhelo incontenible: volver algún día a su tierra natal. Pero antes de poder alcanzar este objetivo final, Loni estaba decidido a enfrentarse a quienes habían jugado con el destino de su familia y de todos los demás miembros de su clan, su única familia. Y así, como si de un vaquero cósmico se tratase, Loni Radden, respetado por todo su clan, emprendió esta aventura con su banjo como compañero melódico, a sabiendas de que cualquier miembro de su comunidad le seguiría hasta la muerte.",
    price: 100,
  },
  {
    idCharacter: 49,
    nameCharacter: "JUDGE LYNCH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHOSTOWN/GHOSTOWN_JUDGELYNCH_N3_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "En el pasado fui un juez derecho y justo, pero la justicia de los hombres me decepcionó y por ello firmé un pacto con el dios de la muerta: he intercambiado mi vida por el poder de juzgar las almas de los ricos o de los pobres, de los culpables o de los inocentes y sin hacer distinción por la forma en que han llevado sus vidas en el pasado. Pero actualmente ejerzo como juez itinerante entre Purgatory y el más allá, y sé todo lo que hay que saber sobre sus habitantes: para mí son todos culpables y deben expiar sus pecados en la tierra como fantasmas y volver a vivir una y otra vez sus muertes antes de ganar el derecho al descanso eterno.¡Hará falta mucho tiempo y oro para poder convencerme de que les ha llegado la hora!",
    price: 70,
  },
  {
    idCharacter: 50,
    nameCharacter: "MARSHAL",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHOSTOWN/GHOSTOWN_MARSHALMT_N2_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "DEP nuestro valiente Marshal, que ha sabido instaurar la paz y restablecer el orden en la ciudad. Invencible en un duelo, ha sido cobardemente asesinado en una emboscada al ser acribillado por los peores maleantes de la región, no sin antes haber enviado a unos cuantos al cementerio.",
    price: 80,
  },
  {
    idCharacter: 51,
    nameCharacter: "DEATH ADDER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/DOMINION/DOMINION_DEATHADDERMT_N4_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "¡Adder es lo más de lo más en términos de juguetes de la gama Dominion! Se trata de una figurita de una calidad excepcional para coleccionar, totalmente armada y pintada a mano. Está totalmente articulada y brilla en la oscuridad gracias a su pintura fosforescente. Su arma y su trono vienen incluidos en su caja. No se recomienda para los menores de 4 años. Figurita n° 1 salida de la gama Dominion. Made by Zlatar Toys. Arrancando con furia su etiqueta, Adder no tarde en comprender su situación: ¡era libre! Ya nadie va a manipularle para nada, así que ya no habrá opción de que los niños puedan decidir qué van a hacer con él... Ya no seguirá las órdenes de nadie, sino al contrario, ¡todo el mundo le obedecerá! Con su increíble carisma, Adder ha convencido a sus hermanos de que deberían ser los árbitros de su propio destino, pero para hacerlo, tendrían que ser más en número… Como primer decreto, ha puesto en marcha una cadena de montaje llamada la Fábrica en el seno de su cuartel general, el Árbol, y con ella ha empezado a construir nuevos Dominion... ¿Quién sabe qué talla podría alcanzar el territorio de los Dominion después de que Adder haya perpetrado todos sus planes?",
    price: 90,
  },
  {
    idCharacter: 52,
    nameCharacter: "DOOKOR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/DOMINION/DOMINION_DOOKOR_N4_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "Bicéfalo = con el doble de inteligencia = y un poder duplicado, ¡y todo por el mismo precio! Dookor es el jefe de los ogros de las montañas. ¡Su crueldad resulta innegable! Es una lástima que su comportamiento sea a menudo... ¿contradictorio? Si solo pudiera concentrarse en una acción concreta, su horda de ogros podría, sin lugar a dudas, dominar Orfanwood... Figurita n° 6 salida de la gama Dominion. Made by Zlatar Toys.",
    price: 70,
  },
  {
    idCharacter: 53,
    nameCharacter: "KENNY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/NIGHTMARE/NIGHTMARE_KENNYMT_N4_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "Discípulo del dios Griffonmor, Kenny no tiene nada en común con los Nightmare. Ielena lo aceptó en el clan únicamente porque espera descubrir el secreto del fuego sagrado... Esta fuerza destructiva está en manos de una única familia de Clint City...",
    price: 70,
  },
  {
    idCharacter: 54,
    nameCharacter: "KOLOS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/NIGHTMARE/NIGHTMARE_KOLOSMT_N5_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "En un solar en construcción para un supermercado del barrio este de Clint City, se ha descubierto un huevo muy raro. En el más completo secreto, Ielena se hace con huevo y lo hace eclosionar, liberando a un monstruo gigantesco que arrasa con todo a su paso. Los enemigos de los Nightmare ya pueden ir preparándose.",
    price: 80,
  },
  {
    idCharacter: 55,
    nameCharacter: "CAELUS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SKEELZ/SKEELZ_CAELUSMT_N5_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "Nadie sabe cuánto tiempo lleva Caelus dirigiendo la academia. Pero una cosa es segura, no hay nadie que esté vivo y que haya conocido a su predecesor. Él reúne alrededor suya a los alumnos y profesores más brillantes, y aunque de vez en cuando haya cosas que puedan sorprender, los que le entornan saben que hay que tener confianza en él, aunque sea a ciegas.",
    price: 100,
  },
  {
    idCharacter: 56,
    nameCharacter: "DOUNIA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SKEELZ/SKEELZ_DOUNIAMT_N3_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "Si el misterio tiene un origen, entonces probablemente Dounia sea la causa; nadie sabe quién es, nadie sabe de dónde viene, pero el hecho de que ella vea a través de los ojos vendados y de que domine las ilusiones ha despertado la codicia del Polit que no deja de perseguirla. Dounia no es de las que se deja atrapar, pero para gente como ella, solamente la Academia de los Skeelz puede darle refugio.",
    price: 70,
  },
  {
    idCharacter: 57,
    nameCharacter: "KASSAR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OBLIVION/OBLIVION_KASSAR_N2_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "¿Quién es Kassar, el poderoso guerrero del pueblo olvidado? Una teoría afirma que era un simple trabajador de las obras de reconstrucción post-Mechakolos, y que utilizó sus poderes de transformación para parecerse al jefe Oblivion. Otro rumor es que fue un vagabundo que se entrenó con varios clanes, como los Fang Pi Clang y los Paradox. Otros creen que en realidad es el hermano de #Tyres, ¡y que está decidido a revelar la historia del genocidio de su pueblo! ¿Tienen todos razón o están equivocados? Solo una cosa es cierta: se metamorfosea con regularidad para aumentar su musculatura, y cuando lo hace, ¡pega fuerte!",
    price: 90,
  },
  {
    idCharacter: 58,
    nameCharacter: "ALI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OBLIVION/OBLIVION_ALI_N2_HD_673.png",
    },
    idFactions: 7,
    descriptionCharacter:
      "Ali es un cazador de recompensas. Y ha matado a algunos tipos peligrosos, sin dudar ni por un momento. En Clint City, tiene una pequeña tienda de pesca. El tipo es un entusiasta de esta actividad. Pero no vayas a pedirle consejo sobre nada a la parte de atrás de su tienda, ya que el hombre tiene mal carácter... De estilo minimalista, su objetivo está claro: esperar a que su hermano Tyres se acerque para explicarle que probablemente sea él la clave de los acontecimientos que ocurran...",
    price: 70,
  },
  {
    idCharacter: 59,
    nameCharacter: "MAANA CERCEI",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HIVE/HIVE_MAANACERCEICR_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "Sueños rotos, recuerdos de la alegría perdida... la corte imperial, sus complots y finalmente la traición inesperada. Los Hive me llaman madre, Maana Cercei, y ellos son mis hijos en la mente colmena. Cada uno de ellos recibe mi beso: un chip que los une mí. Yo soy su todo, su omega, la que originó la resistencia y, desde ahora, la venganza es mía... muy pronto, hermano... ¡muy pronto, mi vida!",
    price: 80,
  },
  {
    idCharacter: 60,
    nameCharacter: "MAANA 2097",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/HIVE/HIVE_MAANA2097_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "El año 2097 será el punto de inflexión para Clint City, una ucronía en la que el tiempo ya no existirá, en la que los acontecimientos que podrían haber sucedido jamás lo hicieron. Desde este enclave llamado Clinterra, una figura de la Resistencia ha decidido regresar a Clint City para tomar el control de los acontecimientos que llevarán a todos al muro de la nada. La cibernética Manaa, y su envoltura sintética evolutiva, se humanizan al evolucionar con el tiempo... se abren posibilidades inéditas para su clan, especialmente con la llegada de los metamorfos Oblivion.",
    price: 90,
  },
  {
    idCharacter: 61,
    nameCharacter: "GURU",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SAKROHM/SAKROHM_GURUMT_N1_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "Antiguo fontanero, Robert se ha convertido en Guru Fitoplanctoniano tras haber sido abducido por alienígenas que, según él, lo llevaron a 'la dimensión paralela a la izquierda' para conocer al Glibon Dashra Sakrh. Guru vuelve a la Tierra como embajador de la 'Exo-nación', para preparar su venida y erradicar a todos los antiextraterrestres.",
    price: 100,
  },
  {
    idCharacter: 62,
    nameCharacter: "URANUS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/SAKROHM/SAKROHM_URANUSCR_N3_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "Desde su más tierna infancia, Uranus es una juerguista empedernida. Una noche, al salir de 'Pilou Dancing Night', su discoteca favorita, ve un objeto volador en el cielo. Al volver a casa busca documentación sobre los ovnis y da con la página web de los Sakrohms. Descubre su filosofía y decide unirse a ellos porque le parecen muy majos.",
    price: 60,
  },
  {
    idCharacter: 63,
    nameCharacter: "PERICLES",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RIOTS/RIOTS_PERICLESMT_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "'Para dar un giro a la civilización, hace falta una idea, una idea que germine y se desarrolle, siempre en pro del hombre...' 'Liberar la ciencia del yugo de la economía e invitar a los auténticos creadores de este mundo a unir sus fuerzas por el futuro de la humanidad...' Todo ello está escrito en el Código Riots de Arístides Pericles, gran pensador del siglo pasado y fundador de Riotspolis. Tras haber vencido a la muerte con ayuda de la familia Van Wesel y la Dra Copernica la anciana, el Patriarca de los Riots está listo para iluminar el mundo... ¡hasta la eternidad!",
    price: 90,
  },
  {
    idCharacter: 64,
    nameCharacter: "OCTANA",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/RIOTS/RIOTS_OCTANA_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "La hija rebelde del Patriarca nunca ha tenido paciencia para seguir los cursos impartidos en el Alma Mater de Riotspolis a pesar de las recomendaciones de su examen de aptitud. Por eso aceptó sin pesar unirse a la sección de trabajos prácticos de #Boomstock. Dejando de lado su espíritu analítico, ha aprendido perfectamente las técnicas necesarias para manejar chismes superguays como el soplete de propulsión de Copérnica.",
    price: 80,
  },
  {
    idCharacter: 65,
    nameCharacter: "TORO",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHEIST/GHEIST_TOROMT_N4_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "Fiel soldado del GHEIST, Toro ha ido ascendiendo de manera progresiva en el seno de la organización hasta convertirse en el responsable de la célula de Clint City. Sigmund siente aprecio por él, y sabe que es lo suficientemente inteligente como para sacar adelante las misiones que le son confiadas pero también lo bastante tonto como para poner en tela de juicio su autoridad.",
    price: 80,
  },
  {
    idCharacter: 66,
    nameCharacter: "ROLPH",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/GHEIST/GHEIST_ROLPH_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "Malvado, agresivo y violento, Rolph estaba dispuesto a todo para convertirse en campeón del mundo, lo que implicaba entrenar con el GHEIST. Gracias a los avances científicos de Vryer, Rolph estaba al fin listo para desafiar a Hammer, pero el sospechaba que el profesor no le había contado todo y que estaba sufriendo extrañas modificaciones sin su entero conocimiento...",
    price: 70,
  },
  {
    idCharacter: 67,
    nameCharacter: "DREGN",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/VORTEX/VORTEX_DREGNMT_N5_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "En un futuro lejano, Dregn es el maléfico emperador que reina en Clint City de manera totalitaria. Para su desgracia, una profecía revela que una alianza de los descendientes de los clanes acabará con él. A pesar de que no cree en las artes adivinatorias, prefiere viajar al pasado y aniquilar a los clanes por si acaso.",
    price: 70,
  },
  {
    idCharacter: 68,
    nameCharacter: "DREGN 2097",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/VORTEX/VORTEX_DREGN2097_N4_HD_673.png",
    },
    idFactions: 8,
    descriptionCharacter:
      "En un futuro no muy lejano, hacia el año 2097, Dregn es el emperador que reina sobre Clinterra. Gracias a un excepcional avance tecnológico y científico, este nuevo tipo de sintético es el resultado de una fusión entre su Alfa y su Omega. Para su desgracia, una profecía revela que una alianza de los descendientes de los clanes acabará con él. A pesar de que no cree en las artes adivinatorias, prefiere viajar al pasado para hacer entrar en razón a los clanes existentes y poder reinar en paz, a ser posible en compañía de su reina...",
    price: 90,
  },
  {
    idCharacter: 69,
    nameCharacter: "ALEKPEROV",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_ALEKPEROV_N1_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Si hay un hombre que hace y deshace los conflictos en Clint City, ese es Vaguit Alekperov, gerente de OILZ Co. Al cabo de los años, este magnate del petróleo se ha hecho con una gran parte del desierto del Saud y con múltiples explotaciones offshore (cerca de las islas Melkozu y Waterfall) que antes pertenecían a Oxen y Al Safra. Para que su empresa tenga un mayor peso en la economía, actualmente está adquiriendo explotaciones de tierras raras terrestres, extraterrestres e incluso extradimensionales. Nada detiene a este hombre de negocios, del que se dice que ha sobrevivido a numerosos intentos de asesinato y a un accidente de avión. Toda una proeza sobrehumana...",
    price: 80,
  },
  {
    idCharacter: 70,
    nameCharacter: "BUKERZERG",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_BUKERZERG_N1_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Las redes sociales de Noah Bukerzerg han conquistado rápidamente el mundo digital y transformado para siempre las relaciones sociales en Clint City. Todos sus habitantes aparecen en las redes sociales del grupo PROFILE, en donde es posible encontrar las mejores actuaciones de Stella, los tutoriales de belleza de Jessie, las últimas batallas de Lorenzald o el supuesto vídeo sexual de Katja. Cada uno exhibe su vida, critica la de los demás o trolea a diestro y siniestro. Noah lo sabe todo de vuestras vidas y deseos gracias a los exabytes de vídeos y mensajes publicados cada día. Pero a quién se le ocurriría pensar que este rey bondadoso del universo digital, este hombre moderno hecho a sí mismo, manipula la información para trucar las elecciones, intensificar los comunitarismos o incitar a las personas a consumir la última generación de Pillz de Morphun. De verdad que se dice cualquier cosa...",
    price: 70,
  },
  {
    idCharacter: 71,
    nameCharacter: "KUSM",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_KUSM_N1_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Dotada de inigualables capacidades intelectuales, Claudie Kusm se ha convertido en una referencia mundial en el campo de la investigación sobre desplazamiento espacial y temporal. Ella ha logrado reunir todos los conocimientos actuales existentes sobre el tema, materializados en la propulsión hipersónica de los Hive utilizada por Raam en el dispositivo de viaje en el tiempo de Pr Hartnell. Ya sea para viajar a una galaxia muy lejana o para visitar a los ancestros, las tecnologías y vehículos de INFINITY son hoy en día la referencia universal en este campo. Sin embargo, Melody le atribuye intenciones poco honestas a esta gran investigadora, que habría convertido a Clint City en el epicentro de los principales conflictos del universo al haber reducido las limitaciones espacio-temporales…",
    price: 70,
  },
  {
    idCharacter: 72,
    nameCharacter: "RODSEY",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_RODSEY_N1_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "En lugar de optar por los programas audiovisuales inteligentes que convierten a aquellos ciudadanos en individuos difíciles de gobernar, Cyrielle Rodsey se ha decantado por la caja tonta que los hace obedientes. 'Sexy guns', 'Vivir con los Roots' o 'Interceptor, mi vida de poli', todos estos programas absurdos con una exquisita crueldad física, psicológica y sexual están disponibles actualmente en la plataforma TALKS. La llamada Productora, reina de la pequeña pantalla convertida y reina de todas las pantallas, anima a la juventud a no preocuparse de sus neuronas ni de la gestión del mundo y, en su lugar, a buscar una notoriedad efímera en alguno de estos programas. Para convencer a Sra. Rodsey y gozar de esta visibilidad tan deseada, hay que aprender a timar, engañar y pelear…",
    price: 90,
  },
  {
    idCharacter: 73,
    nameCharacter: "ZEBOS",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_ZEBOS_N1_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "'El último modelo de nave espacial SEXY de Infinity, un arma afilada de la colección de Leone o un perfume de Nana Litchie? Todo lo que necesitas lo encontrarás en LIMITLESS. Entregas en toda la galaxia en menos de 10 minutos'. Tras haberse hecho de oro con el comercio electrónico, y ahora que todos los habitantes de la ciudad son adictos a sus servicios de entrega, Jack Zebos se dedica desde hace poco al mercado agroalimentario y está adquiriendo una a una las principales empresas del sector, empezando por MegaNutz. Muy pronto, todo lo que compremos o consumamos servirá a los intereses de este increíble empresario.",
    price: 70,
  },
  {
    idCharacter: 74,
    nameCharacter: "SLATTER",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/OCULUS/OCULUS_SLATTER_N5_HD_673.png",
    },
    idFactions: 2,
    descriptionCharacter:
      "Plantarles tarjetas amarillas, tarjetas rojas y balones en toda la jeta a los jugadores más recalcitrantes no era suficiente para Michel Slatter (Striker), así que decidió organizar un último partido antes de hacerse comentarista deportivo. Debería haber desconfiado de que, como todo lo que pasa en la ciudad, este partido estaría amañado y financiado por una entidad secreta. '¡No nos andamos con coñas en el fútbol!', pensaba él al presentarse en la Oculus Plaza, ciego de ira. Desde que se hicieron con su envoltorio corporal, Striker ha cambiado radicalmente de opinión. Ahora se ha convertido en el jefe de la liga de fútbol de Clint City, lo que significa que es más influyente y corrupto que El D10S, ¡además de estar totalmente alineado con el POLIT!",
    price: 90,
  },
  {
    idCharacter: 75,
    nameCharacter: "VANSAAR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_VANSAAR_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Desde los primeros días de su incorporación al ejército del Polit, Van Saar comprendió que dedicaría toda su vida al servicio de esta prestigiosa institución y que lo sacrificaría todo, esposa, hijos, amistades e incluso su salud. Desde las trincheras de primera línea hasta los salones de estado mayor, ha vivido todas las experiencias, y actualmente, nadie en Clint City domina el delicado arte del combate mejor que él.",
    price: 100,
  },
  {
    idCharacter: 76,
    nameCharacter: "ADMINISTRATOR",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_ADMINISTRATOR_N2_NIGHT_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Maestro de las ecuaciones por las que se rige Clint City, el Administrador es un programa neutro presente desde la primera versión de Clint Fighting. Es una idea de los desarrolladores de Acute Games, una entidad oscura de una dimensión paralela. Al mismo tiempo, apareció una anomalía importante, acrecentada por las recientes perturbaciones dimensionales: el corazón de todo el sistema está enfermo, tanto de un lado como del otro. Dado que está equipado con tecnología Vortex y Hive, la idea es enviar al Administrador en forma de 'Oculus Inactivo' para agitar y desencadenar una tormenta dentro de todo el sistema, ¡protegiéndonos en caso de que se produzca una nueva infección!",
    price: 100,
  },
  {
    idCharacter: 77,
    nameCharacter: "ROBERT COBB",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_ROBERTCOBB_N4_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "El sueño de Robert Cobb era crear un mundo paralelo, una utopía libre de corrupción. A medida que sus creaciones tomaron forma, se dio cuenta de que no seguían sus instrucciones al pie de la letra... ¡Se movían a su libre albedrío! Robert Cobb creó la vida virtual. Estaba feliz y al mismo tiempo atemorizado: ¿y si un día sus propias creaciones se volvieran contra él? En secreto, empieza a desarrollar 4 programas destructores, capaces de llevar a efecto la completa aniquilación y un nuevo arranque del mundo virtual. Con la esperanza de que este día fatídico no llegue nunca, los encierra en el laberinto situados en los lindes del mundo: el Maze...",
    price: 100,
  },
  {
    idCharacter: 78,
    nameCharacter: "SOLOMON",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_SOLOMON_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Hacer una crónica de la vida de Solomon no es tarea fácil. Se sabe poco sobre su revuelto pasado en Los Santos y sobre su escapada a Clint City. Él está implicado en el inicio de los primeros torneos improvisados en un hangar abandonado, pero eso no explica su ascensión fulgurante en el mundo de las competiciones. En menos de diez años, el feroz guerrero se hizo un rico tiburón de los negocios controlando y dirigiendo todo lo que tiene que ver con combates en la ciudad. Ya se trate de un torneo de principiantes o de un evento prestigioso como el campeonato mundial de boxeo, Solomon es quien se lleva los beneficios y quien cambia las reglas, siempre que tenga ganas.",
    price: 90,
  },
  {
    idCharacter: 79,
    nameCharacter: "BRIDGET",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_BRIDGET_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "Curar a los demás es un oficio complicado. Pero curarlos en medio del campo de batalla, esquivando las balas y oyendo las explosiones de proyectiles es más que heroico, y es precisamente la realidad cotidiana de Bridget. Si necesitas curas urgentes en pleno combate, sólo ella te podrá ayudar.",
    price: 100,
  },
  {
    idCharacter: 80,
    nameCharacter: "ASHIGARU",
    imageSource: {
      uri: "https://s.acdn.ur-img.com/urimages/perso/LEADER/LEADER_ASHIGARU_N5_HD_673.png",
    },
    idFactions: 1,
    descriptionCharacter:
      "La paciencia es la principal virtud de Ashigaru. Es capaz de esperar durante horas a que su adversario haga un movimiento erróneo y para aprovechar la ocasión y vencerle en un abrir y cerrar de ojos. Viejo amigo de Lost Hog Cr, abandono el Fang Pi Clang, decepcionado por sus miembros, quienes no se entrenaban lo suficientemente en serio según su opinión.",
    price: 90,
  },
];

export default CHARACTERS;

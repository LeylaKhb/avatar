import title_character_2 from "../static/battle/title_character_2.webp";
import character_2 from "../static/battle/character_2.webp";
import character_3 from "../static/battle/character_3.webp";
import character_4 from "../static/battle/character_4.webp";
import character_5 from "../static/battle/character_5.webp";
import character_6 from "../static/battle/character_6.webp";
import character_7 from "../static/battle/character_7.webp";
import character_8 from "../static/battle/character_8.webp";
import character_9 from "../static/battle/character_9.webp";
import character_10 from "../static/battle/character_10.webp";
import character_11 from "../static/battle/character_11.webp";
import character_12 from "../static/battle/character_12.webp";

export const battle_characters = [
    {
        image: title_character_2,
        title: 'НАЕМНИК',
        description: 'Вооружен до зубов, коварен, и без сомнения знает толк в битвах. Настоящий мастер засад. Не рекомендуем попадать к нему в лапы. Всё может закончиться быстро. И плачевно.',
        uniqueAbility: 'Уникальная способность - мина.',
        uniqueAbilityDescription: 'Наемник любит разбрасывать мины. Если на  нее наступить, то можно сразу лишиться всех очков здоровья. Смотрите под ноги, чтобы не попасть в неловкую ситуацию.'
    },
    {
        image: character_2,
        title: 'МИНОТАВР',
        description: 'Сила, мощь и разрушающий обрез в руках. Минотавр готов сразиться с любым. От его выстрелов содрогнется земля, а от его способности союзники восстановят недостающее здоровье.',
        uniqueAbility: 'Уникальная способность - тотем.',
        uniqueAbilityDescription: 'Поставьте его в любой точке карты и он будет восстанавливать здоровье вам и союзникам. Также за него можно спрятаться, но рога будут видны!'
    },
    {
        image: character_3,
        title: 'ПУГАЛО',
        description: 'Устрашающий, смертоносный и разящий. У Пугала единственный принцип: один выстрел - один труп. Вряд ли с ним кто-то захочет встретиться один на один в узком коридоре.',
        uniqueAbility: 'Уникальная способность — разящая стрела.',
        uniqueAbilityDescription: 'Достаточно попасть в голову противника, чтобы сразу отправить его на респаун. Нет противника нет проблем.'
    },
    {
        image: character_4,
        title: 'ЩИТ',
        description: 'Настоящий защитник. Прикроет союзников, поддержит огнём и всегда окажется в том месте, где необходима помощь. Виртуозно обращается с пистолетом и точно стреляет в любой ситуации.',
        uniqueAbility: 'Уникальная способность — щит.',
        uniqueAbilityDescription: 'Эта штуковина в руках совсем не тарелка для пиццы. Щит поглощает урон вражеских выстрелов. Идеален, если использовать в замкнутых пространствах.'
    },
    {
        image: character_5,
        title: 'КУРЬЕР',
        description: 'Доставляет пули от своей снайперской винтовки до тела неприятеля. Профессионально, быстро, с трек-кодом. Всегда знает, где находится и куда перемещается противник. Любит координировать действия команды.',
        uniqueAbility: 'Уникальная способность - тепловизор.',
        uniqueAbilityDescription: 'Курьер заряжает снайперскую винтовку для мега-выстрела. Во время подготовки Курьер несколько секунд видит расположение врагов сквозь стены.'
    },
    {
        image: character_6,
        title: 'РЫБМЕН',
        description: 'Обожает пиццу и ненавидит врагов. Любит угощать всех: оппонентов - пулями, союзников - итальянским лакомством. Любитель в любую битву добавить перца, а в тело противника - пару новых дырок.',
        uniqueAbility: 'Уникальная способность — волшебная еда.',
        uniqueAbilityDescription: 'Рыбмен бросает кусок пиццы. Если в союзника, то пицца добавляет здоровья. Если противника, то пицца отравляет врага, и он начинает терять здоровье.'
    },
    {
        image: character_7,
        title: 'АССАСИН',
        description: 'Проффессионал быстрых и тихих убийств. Никто не знает, откуда она появляется, и куда она исчезает. После себя оставляет фирменный почерк – острые раны от гарпуна. Вспышка, испуг и о вас уже никто не вспомнит.',
        uniqueAbility: 'Уникальная способность - гарпун.',
        uniqueAbilityDescription: 'В обеих руках у неё гарпуны на цепях. Может одновременно наносить урон двум разным противникам.'
    },
    {
        image: character_8,
        title: 'АКУЛА',
        description: 'Заберет вашу волю, ваше здоровье и вашу душу. Зубастый, агрессивный герой, который распаляется все сильнее после каждого убийства. Если вовремя его не остановить - страдать будет вся команда.',
        uniqueAbility: 'Уникальная способность - трупное здоровье.',
        uniqueAbilityDescription: 'После убийства забирает душу противника и восстанавливает себе здоровье.'
    },
    {
        image: character_9,
        title: 'ГЛАДИАТОР',
        description: 'Дитя войны. Битва для гладиатора - родная стихия. Обладает несгибаемой волей к победе и подчинит себе любого, кто воспротивится. Бороться с ним очень тяжело, а игнорировать невозможно.',
        uniqueAbility: 'Уникальная способность — отскок.',
        uniqueAbilityDescription: 'Прикрывается щитом, от которого отскакивают выстрелы противника. Траектория отскока может быть изменена вручную.'
    },
    {
        image: character_10,
        title: 'ШТУРМОВИК',
        description: 'Классика всех шутеров. Берите в руки пистолет-пулемет и вперед в атаку. Ваш персонаж ничего не боится и всегда первым вступает в схватку. Урон, скорость и смелость вот за что вас ценят в команде.',
        uniqueAbility: 'Уникальная способность — турель.',
        uniqueAbilityDescription: 'Поставьте ее в любой точке карты, и она будет отстреливать врагов за вас. Турель может быть уничтожена противником, поэтому без защиты лучше ее не оставлять.'
    },
    {
        image: character_11,
        title: 'ЯД',
        description: 'Яд не полагается на боевую силу выстрелов. Но способна отравить жизнь всей команде. Её ненавидят оппоненты и обожают союзники. Один точный бросок гранаты — и у противников большие проблемы.',
        uniqueAbility: 'Уникальная способность — газовая граната.',
        uniqueAbilityDescription: 'Содержит в себе ядовитый дым, который ежесекундо наносит урон врагам, если они находятся в зоне действия.'
    },
    {
        image: character_12,
        title: 'СИНТ',
        description: 'Инопланетный симбиот, у которого одна задача - изрешетить все вокруг. Синт очень живуч: при поддержке союзников сможет затанковать неприятеля и выйти победителем из любой схватки.',
        uniqueAbility: 'Уникальная способность — поглощающий экзоскелет.',
        uniqueAbilityDescription: 'Полностью поглощает первый урон, который наносится неприятелем.'
    },
]
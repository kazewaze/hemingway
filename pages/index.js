import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hemingway</title>
        <meta name="author" content="Kaycee Ingram" />
        <meta name="description" content="Monologue to the Maestro by Ernest Hemingway" />
        <link rel="icon" type="image/webp" href="img/favicon.webp" />
      </Head>
      <nav className={styles.nav}>
        <h1 className={styles.heading}>HEMINGWAY</h1>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Monologue to the Maestro
        </h1>

        <h2 className={styles.description}>
          by Ernest Hemingway
        </h2>

        <time className={styles.datetime} dateTime="1935-10-01">October, 1935</time>
        <div className={styles.contentBody__Container}>
          <p className={styles.contentBodyFirst}>About a year and a half ago a young man came to the front door of the house in Key
            West and said that he had hitch-hiked down from upper Minnesota to ask your
            correspondent a few questions about writing. Arrived that day from Cuba, having to see
            some good friends off on the train in an hour, and to write some letters in the meantime,
            your correspondent, both flattered and appalled at the prospect of the questioning, told
            the young man to come around the next afternoon. He was a tall, very serious young
            man with very big feet and hands and a porcupine hair-cut.</p>

            <p className={styles.contentBody}>It seemed that all his life he had wanted to be a writer. Brought up on a farm he had
            gone through high school and the University of Minnesota, had worked as a newspaper
            man, a rough carpenter, a harvest hand, a day laborer, and had bummed his way
            across American twice. He wanted to be a writer and he had good stories to write. He
            told them very badly but you could see that there was something there if he could get it
            out. He was so entirely serious about writing that it seemed that seriousness would
            overcome all obstacles. He had lived by himself for a year in a cabin he had built in
            North Dakota and written all that year. He did not show me anything that he had written
            then. It was all bad, he said.</p>

          <p className={styles.contentBody}>I thought, perhaps, that this was modesty until he showed me a piece he had published
            in one of the Minneapolis papers. It was abominably written. Still, I thought, many other
            people write badly at the start and this boy is so extremely serious that he must have
            something; real seriousness in regard to writing being one of the two absolute
            necessities. The other,
            unfortunately, is talent.</p>

          <p className={styles.contentBody}>Besides writing this
            young man had one
            other obsession. He
            had always wanted to
            go to sea. So, to
            shorten this account,
            we gave him a job as a
            night watchman on the
            boat which furnished
            him a place to sleep
            and work and gave
            him two or three hoursʼ
            work each day at
            cleaning up and a half
            of each day free to do
            his writing. To fulfill his
            desire to go to sea, we
            promised to take him
            to Cuba when we went
            across.</p>

          <p className={styles.contentBody}>He was an excellent night watchman and worked hard on the boat and at his writing but
            at sea he was a calamity; slow where he should be agile, seeming sometimes to have
            four feet instead of two feet and two hands, nervous under excitement, and with an
            incurable tendency toward sea-sickness and a peasant reluctance to take orders. Yet
            he was always willing and hard-working if given plenty of time to work in.</p>

          <p className={styles.contentBody}>We called him the Maestro because he played the violin, this name was eventually
            shortened to the Mice, and a big breeze would so effectually slow up his co-ordination
            that your correspondent once remarked to him, “Mice, you certainly must be going to be
            a hell of a good writer because you certainly arenʼt worth a damn at anything else.”
            On the other hand his writing improved steadily. He may yet be a writer. But your
            correspondent, who sometimes has an evil temper, is never going to ship another hand
            who is an aspirant writer, nor go through another summer off the Cuban or any other
            coast accompanied by questions and answers on the practice of letters. If any more
            aspirant writers come on board the Pilar let them be females, let them be very beautiful
            and let them bring champagne.</p>

          <p className={styles.contentBody}>Your correspondent takes the practice of letters, as distinct from the writing of these
            monthly letters, very seriously; but dislikes intensely talking about it with almost anyone
            alive. Having had to mouth about many aspects of it during a period of one hundred
            and ten days with the good old Maestro, during much of which time your correspondent
            had to conquer an urge to throw a bottle at the Mice whenever he would open his mouth
            and pronounce the word writing, he hereby presents some of these mouthings written
            down.</p>

          <p className={styles.contentBody}>If they can deter anyone from writing he should be deterred.  If they can be of use to
            anyone your correspondent is pleased.  If they bore you there are plenty of pictures in
            the magazine that you may turn to.</p>

          <p className={styles.contentBody}>Your correspondentʼs excuse for presenting them is that some of the information
            contained would have been worth fifty cents to him when he was twenty-one.</p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>What do you mean by good writing as opposed to bad writing?</span></p>

          <p className={styles.contentBody}>Your correspondent:  <span className={styles.hemingway}>Good writing is true writing.  If a man
            is making a story up it will be true in proportion to the
            amount of knowledge of life that he has and how
            conscientious he is; so that when he makes something up
            it is as it would truly be.  If he doesnʼt know how many
            people work in their minds and actions his luck may save
            him for a while, or he may write fantasy.  But if he
            continues to write about what he does not know about he
            will find himself faking. After he fakes a few times he
            cannot write honestly any more.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Then what about imagination?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Nobody knows a damned thing about it except that it
            is what we get for nothing. It may be a racial experience*.
            I think that is quite possible. It is the one thing beside
            honesty that a good writer must have. The more he learns
            from experience the more truly he can imagine. If he gets
            so he can imagine truly enough people will think that the
            things he relates all really happened and that he is just
            reporting.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Where will it differ from reporting?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>If it was reporting they would not remember it. When you describe something that
            has happened that day the timeliness makes people see it in their own imaginations. A
            month later that element of time is gone and your account would be flat and they would
            not see it in their minds nor remember it. But if you make it up instead of describe it you
            can make it round and whole and solid and give it life. You create it, for good or bad.  It
            is made; not described. It is just as true as the extent of your ability to make it and the
            knowledge you put into it. Do you follow me?</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Not always.</span></p>

          <p className={styles.contentBody}>Y.C. (crabbily):  <span className={styles.hemingway}>Well for chrissake letʼs talk about something else then.</span></p>

          <p className={styles.contentBody}>Mice (undeterred): <span className={styles.mice}>Tell me some more about the mechanics of writing.</span></p>

          <p className={styles.contentBody}>Y.C.:  <span className={styles.hemingway}>What do you mean?  Like pencil or typewriter? For chrissake.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Yes.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Listen. When you start to write you get all the kick and the reader gets none. So
            you might as well use a typewriter because it is that much easier and you enjoy it that
            much more. After you learn to write your whole object is to convey everything, every
            sensation, sight, feeling, place and emotion to the reader. To do this you have to work
            over what you write. If you write with a pencil you get three different sights at it to see if
            the reader is getting what you wanted him to. First when you read it over; then when it
            is typed you get another chance to improve it, and again in the proof. Writing it first in
            pencil gives you one-third more chance to improve it. That is .333 which is a damned
            good average for a hitter. It also keeps it fluid longer so that you can better it easier.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>How much should you write in a day?</span></p>

            <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>The best way is always to stop when you are going good and when you know
            what will happen next. If you do that every day when you are writing a novel you will
            never be stuck. That is the most valuable thing I can tell you so try to remember it.</span></p>

            <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right.</span></p>

            <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Always stop when you are going good and donʼt think about it or worry about it
            until you start to write the next day. That way your subconscious will work on it all the
            time. But if you think about it consciously or worry about it you will kill it and your brain
            will be tired before you start. Once you are into the novel it is as cowardly to worry
            about whether you can go on to the next day as to worry about having to go into
            inevitable action. You have to go on. So there is no sense to worry.  You have to learn
            that to write a novel. The hard part about a novel is to finish it.</span></p>

            <p className={styles.contentBody}>Mice: <span className={styles.mice}>How can you learn not to worry?</span></p>

            <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>By not thinking about it.  As soon as you start to think about it stop it. Think about
            something else. You have to learn that.</span></p>

            <p className={styles.contentBody}>Mice: <span className={styles.mice}>How much do you read over every day before you start to write?</span></p>

            <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>The best way is to read it all every day from the start, correcting as you go along,
            then go on from where you stopped the day before. When it gets so long that you canʼt
            do this every day read back two or three chapters each day; then each week read it all
            from the start. Thatʼs how you make it all of one piece. And remember to stop while
            you are still going good. That keeps it moving instead of having it die whenever you go
            on and write yourself out. When you do that you find that the next day you are pooped
            and canʼt go on.</span></p>

            <p className={styles.contentBody}>Mice: <span className={styles.mice}>Do you do the same on a story?</span></p>

            <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Yes, only sometimes you can write a story in a day.</span></p>

            <p className={styles.contentBody}>Mice: <span className={styles.mice}>Do you know what is going to happen when you write a story?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Almost never. I start to make it up and have happen what would have to happen
            as it goes along.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>That isnʼt the way they teach you to write in college.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>I donʼt know about that. I never went to college. If any sonofabitch could write he
            wouldnʼt have to teach writing in college.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Youʼre teaching me.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Iʼm crazy. Besides this is a boat, not a college.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>What books should a writer have to read?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>He should have read everything so that he knows what he has to beat.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>He canʼt read everything.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>I donʼt say what he can.  I say what he should.  Of course he canʼt.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Well what books are necessary?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>He should have read WAR AND PEACE and ANNA KARENINA, by Tolstoi,
            MIDSHIPMAN EASY, FRANK MILDAMAY AND PETER SIMPLE by Captain Marryat,
            MADAME BOVARY and LʼEDUCATION SENTIMENTALE by Flaubert,
            BUDDENBROOKS by Thomas Mann, Joyceʼs DUBLINERS, PORTRAIT OF THE
            ARTIST and ULYSSES, TOM JONES and JOSEPH ANDREWS by Fielding, LE
            ROUGE ET LE NOIR and LA CHATREUSE DE PARME by Stendhal, THE BROTHERS
            KARAMOZOV and any two other Dostoevskis, HUCKLEBERRY FINN by Mark Twain,
            THE OPEN BOAT and THE BLUE HOTEL by Stephen Crane, HAIL AND FAREWELL
            by George Moore, Yeats AUTOBIOGRAPHIES, all the good De Maupassant, all the
            good Kipling, all of Turgenev, FAR AWAY AND LONG AGO by W.H. Hudson, Henry
            Jamesʼ short stories, especially MADAME DE MAUVES and THE TURN OF THE
            SCREW, THE PORTRAIT OF A LADY, THE AMERICAN--</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>I canʼt write them down that fast. How many more are there?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Iʼll give you the rest another day. There are about three times that many.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Should a writer have read all of those?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>All of those and plenty more.  Otherwise he doesnʼt know what he has to beat.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>What do you mean “has to beat”?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Listen. There is no use writing anything that has been written before unless you
            can beat it. What a writer in our time has to do is write what hasnʼt been written before
            or beat dead men at what they have done. The only way he can tell how he is going is
            to compete with dead men.  Most live writers do not exist.  Their fame is created by
            critics who always need a genius of the season, someone they understand completely
            and feel safe in praising, but when these fabricated geniuses are dead they will not
            exist. The only people for a serious writer to compete with are the dead that he knows
            are good. It is like a miler running against the clock rather than simply trying to beat
            whoever is in the race with him. Unless he runs against time he will never know what
            he is capable of attaining.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>But reading all the good writers might discourage you.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Then you ought to be discouraged.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>What is the best early training for a writer?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>An unhappy childhood.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Do you think Thomas Mann was a great writer?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>He would be a great writer if he had never written another thing than
            BUDDENBROOKS.</span></p>

          <p className={styles.contentBody}>MICE: <span className={styles.mice}>How can a writer train himself?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Watch what happens today. If we get into a fish see exact it is that everyone does.
            If you get a
            kick out of it
            while he is
            jumping
            remember
            back until
            you see
            exactly what
            the action
            was that
            gave you
            that
            emotion.
            Whether it
            was the
            rising of the
            line from the
            water and
            the way it
            tightened
            like a fiddle
            string until
            drops started from it, or the way he smashed and threw water when he jumped.
            Remember what the noises were and what was said.  Find what gave you the emotion,
            what the action was that gave you the excitement.  Then write it down making it clear so
            the reader will see it too and have the same feeling you had.  Thatʼs a five finger
            exercise.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Then get in somebody elseʼs head for a change If I bawl you out try to figure out
            what Iʼm thinking about as well as how you feel about it. If Carlos curses Juan think
            what both their sides of it are.  Donʼt just think who is right. As a man things are as they
            should or shouldnʼt be. As a man you know who is right and who is wrong. You have to
            make decisions and enforce them. As a writer you should not judge.  You should
            understand.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Listen now. When people talk listen completely. Donʼt be thinking what youʼre
            going to say. Most people never listen. Nor do they observe. You should be able to go
            into a room and when you come out know everything that you saw there and not only
            that. If that room gave you any feeling you should know exactly what it was that gave
            you that feeling. Try that for practice. When youʼre in town stand outside the theatre
            and see how people differ in the way they get out of taxis or motor cars. There are a
            thousand ways to practice. And always think of other people.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Do you think I will be a writer?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>How the hell should I know?  Maybe youʼve got no talent. Maybe you canʼt feel for
            other people. Youʼve got some good stories if you can write them.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>How can I tell?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Write. If you work at it five years and you find youʼre no good you can just as well
            shoot yourself then as now.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>I wouldnʼt shoot myself.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Come around then and Iʼll shoot you.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Thanks.</span></p>
          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Perfectly welcome, Mice. Now should we talk about something else?</span></p>
          <p className={styles.contentBody}>Mice: <span className={styles.mice}>What else?</span></p>


          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Anything else, Mice, old timer, anything else at all.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right. But--</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>No but. Finish. Talk about writing finish. No more. All gone for today. Boss he
            go home.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right then. But tomorrow Iʼve got some things to ask you.</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Iʼll bet youʼll have fun writing after you know just how itʼs done.</span></p>

          <p className={styles.contentBody}> Mice: <span className={styles.mice}>What do you mean?</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>You know. Fun. Good times. Jolly. Dashing off an old masterpiece.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>Tell me --</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Stop it.</span></p>

          <p className={styles.contentBody}>Mice: <span className={styles.mice}>All right. But tomorrow--</span></p>

          <p className={styles.contentBody}>Y.C.: <span className={styles.hemingway}>Yes. All right. Sure. But tomorrow.</span></p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.brewingwisdom.com/2016/02/26/give-freely-proverbs-11-24-25"
          target="_blank"
          rel="noopener noreferrer"
        >
          Give Freely - Proverbs 11:24 - 25
        </a>
      </footer>
    </div>
  )
}
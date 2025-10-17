import { FC } from 'react';
import './Main.scss';
import MainCard from '../MainCard/MainCard';

const Main: FC = () => {
    return (
        <main>
            <section className="main_container">
                <MainCard 
                    title='No more switching between files.'
                    info={`To add missing context: directly reference code by including other files in the chat by adding '${<b>@filename</b>}'.`}
                    second_info='This also works for folders, docs, terminal content, codebase, and more 😈'
                    gifSrc={`${process.env.PUBLIC_URL}/videos/first_main_card.gif`}
                    leftElementsmaxWith={238}
                />
            </section>
        </main>
    )
}

export default Main;
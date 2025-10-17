import { FC } from 'react';
import './Main.scss';
import MainCard from '../MainCard/MainCard';

const Main: FC = () => {
    return (
        <main>
            <section className="main_container">
                <MainCard 
                    title='No more switching between files.'
                    info={<p>To add missing context: directly reference code by including other files in the chat by adding <b>@filename</b>.</p>}
                    second_info='This also works for folders, docs, terminal content, codebase, and more 😈'
                    gifSrc={`${process.env.PUBLIC_URL}/videos/first_main_card.gif`}
                />
                <MainCard 
                    title='No more tedious changes, or forgetting language syntax.'
                    info={<p>Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep.</p>}
                    second_info='Here, we ask Pear to help us handle edge cases 😏'
                    gifSrc={`${process.env.PUBLIC_URL}/videos/second_main_card.gif`}
                />
                <MainCard 
                    title='No more tiresome copy pasting.'
                    info={<p>Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows).</p>}
                    second_info='Prompt it right away 😎'
                    gifSrc={`${process.env.PUBLIC_URL}/videos/third_main_card.gif`}
                />
            </section>
        </main>
    )
}

export default Main;
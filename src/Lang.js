import React, {Component} from 'react';
import { I18nProvider, LOCALES } from "./i18n";
// import {FormattedMessage} from "react-intl";

import translate from "./i18n/messages/translate";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class Lang extends Component {
    render() {
        // const[locale, setLocale] = useState{LOCALES.ENGLISH}

        return (
            <I18nProvider locale={LOCALES.ARMENIA}>
                {/*<FormattedMessage id = "hello" />*/}
                {translate("hello")}
                World
                {translate("edit",  {path: <p> src/img </p>})}
                <hr/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/en" component={LOCALES.ENGLISH}/>
                        <Route path="/ru" component={LOCALES.RUSSIA}/>
                        <Route path="/am" component={LOCALES.ARMENIA}/>
                    </Switch>
                </BrowserRouter>
                {/*<button onClick={() => setLocale(LOCALES.ENGLISH)}>ENGLISH</button>*/}
                {/*<button onClick={() => setLocale(LOCALES.ARMENIA)}>ARMENIA</button>*/}
                {/*<button onClick={() => setLocale(LOCALES.RUSSIA)}>RUSSIA</button>*/}
            </I18nProvider>
        );
    }
}

export default Lang;

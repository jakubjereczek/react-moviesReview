import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchMovie from '../layouts/SeachMovie';
import FavouritesList from '../layouts/FavouritesList';
import InfoFavMovie from './InfoFavMovie';
import WrongPage from '../pages/WrongPage'


const Page = (props) => {
    return (
        <Switch>
            <Route path="/" exact>
                <SearchMovie fAdd={props.fAdd} />
                <FavouritesList movies={props.movies} fDel={props.fDel} />
            </Route>
            <Route path="/mov/:id" render={(props2) => {
                return (
                    <InfoFavMovie movies={props.movies} renderProps={props2} />
                )
            }} />
            <Route>
                <WrongPage />
            </Route >
        </Switch >

    )
}

export default Page;


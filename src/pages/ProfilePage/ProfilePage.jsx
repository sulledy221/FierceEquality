import React, { useState, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react'
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import PageHeader from '../../components/Header/Header';
import userService from '../../utils/userService';
import { useLocation } from 'react-router-dom';
// import Posts from './controllers/users.js'


export default function ProfilePage(){

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const location = useLocation()
    
    async function getProfile(){
       
        try {    

            const username = location.pathname.substring(1)
            // location.pathname returns /jimbo so we need to cut off the / using the js method substring
            // This gets the username from the url! 
            console.log(username, 'username from the path')
            const data = await userService.getProfile(username);
            console.log(data, 'data from getProfile')
            setLoading(() => false)
            setPosts(() => [...data.posts])
            setUser(() => setUser(data.user))
        } catch(err){
            console.log(err)
            setError(err)
        }  
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
    
        <>
        { loading ?  
            <h1>Loading.....</h1>
            :
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <PageHeader />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProfileBio user={user}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>   
            }           
        </>    
    )
}
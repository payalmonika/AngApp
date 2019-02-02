import {Component} from '@angular/core';
import{Iprod} from './prod.model';

    import { from } from 'rxjs';

@Component(
    {
selector:'app-prod',
templateUrl:'./prod.Component.html'
    }
)

export class PrdDetailComponent{
    title:string='****My Product*****';
    Showimage:boolean=true;
    imagewidth:Number=100;
    products:Iprod[]=[        
            {
            _id: "5ab12612f36d2879268f284a",
            name: "Black Panther",
            language: "ENGLISH",
            rate: 4.5,
            type: "Action Adventure Fantasy",
            imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
            },
            {
            _id: "5ab12666f36d2879268f2902",
            name: "Death Wish",
            language: "ENGLISH",
            type: "Action Crime Thriller",
            rate: 3.2,
            imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg"
            },
            {
            _id: "5ab12678f36d2879268f291d",
            name: "Coco",
            language: "ENGLISH",
            type: "Adventure Animation Family",
            rate: 5,
            imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg"
            },
            {
            _id: "5ab126b6f36d2879268f2943",
            name: "Avengers",
            language: "ENGLISH",
            type: "Actione",
            rate: 2,
            imageUrl: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
            },
            {
            _id: "5ab4e66b0c1d2b27846c6407",
            name: "Black Friday",
            language: "ENGLISH",
            rate: 4.5,
            type: "Action Adventure Fantasy",
            imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
            },
            {
            _id: "5ab12686f36d2879268f2930",
            name: "Mission Impossible",
            language: "English",
            rate: 2.5,
            type: "Horror Thriller",
            imageUrl: "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png"
            },
            {
            _id: "5ab12698f36d2879268f293e",
            name: "Incredibles 2",
            language: "ENGLISH",
            type: "Animated",
            rate: 4,
            imageUrl: "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg"
            }
            
    ];

    Details:any[]=[
        {
            _id: "5ab17276f36d282750913a51",
            artists: [
            {
            id: 1,
            name: "Jimi Hendrix",
            cover: "jimi_hendrix",
            bio: "James Marshall Jimi Hendrix was an American rock guitarist, singer, and songwriter. ",
            albums: [
            {
            albumId: "a1",
            title: "Electric Ladyland",
            year: 1968,
            cover: "electric-ladyland",
            price: 20
            },
            {
            albumId: "a2",
            title: "Experience",
            year: 1971,
            cover: "experienced",
            price: 25
            },
            {
            albumId: "a3",
            title: "Isle of Wright",
            year: 1971,
            cover: "isle_of_wright",
            price: 15
            },
            {
            albumId: "a4",
            title: "Band of Gypsys",
            year: 1970,
            cover: "band_of_gypsys",
            price: 10
            }
            ],
            genre: "rock, blues"
            },
            {
            id: 2,
            name: "Madonna",
            cover: "madonna",
            bio: "Madonna Louise Ciccone is an American singer, songwriter, actress, and businesswoman.",
            albums: [
            {
            albumId: "b1",
            title: "Like a Virgin",
            year: 1984,
            cover: "like_a_virgin",
            price: 20
            },
            {
            albumId: "b2",
            title: "True Blue",
            year: 1986,
            cover: "true_blue",
            price: 25
            },
            {
            albumId: "b3",
            title: "Erotica",
            year: 1994,
            cover: "erotica",
            price: 15
            },
            {
            albumId: "b4",
            title: "Ray of Light",
            year: 1998,
            cover: "ray_of_light",
            price: 10
            }
            ],
            genre: "pop"
            },
            {
            id: 3,
            name: "Johnny Cash",
            cover: "johnny_cash",
            bio: "John R. Cash was an American singer-songwriter, guitarist, actor, and author.",
            albums: [
            {
            albumId: "c1",
            title: "Ain't No Grave",
            year: 2010,
            cover: "no_grave",
            price: 20
            },
            {
            albumId: "c2",
            title: "Out Among the Stars",
            year: 2014,
            cover: "among_stars",
            price: 25
            },
            {
            albumId: "c3",
            title: "Solitary Man",
            year: 2000,
            cover: "solitary_man",
            price: 15
            },
            {
            albumId: "c4",
            title: "The Man Comes Around",
            year: 2002,
            cover: "man_comes_around",
            price: 10
            }
            ],
            genre: "pop"
            },
            {
            id: 4,
            name: "Pink Floyd",
            cover: "pink_floyd",
            bio: "Pink Floyd were an English rock band formed in London in 1965. They achieved international acclaim with their progressive and psychedelic music. ",
            albums: [
            {
            albumId: "d1",
            title: "The Wall",
            year: 1979,
            cover: "the_wall",
            price: 20
            },
            {
            albumId: "d2",
            title: "The Dark Side of the Moon",
            year: 1973,
            cover: "dark_side",
            price: 25
            },
            {
            albumId: "d3",
            title: "Animals",
            year: 1977,
            cover: "animals",
            price: 15
            }
            ],
            genre: "Rock"
            }
            ]
        }
    ]

    toogleimage():void
    {
     this.Showimage = !this.Showimage;
    }
}
import $ from 'jquery';
import {getMovie} from './searchmoviemain'
import {setcollectiontitle} from './collectiontitle'
import {deleteelem} from './deleteelement'
import {deletemovie} from './deletemovie'
import {addtocollection,addtocollection1} from './addtocollection'
import {collectionarray} from './collectionarray'
$("#searchmovie").click(function(){
	getMovie();
});
$("#collectiontitle").click(function(){
	setcollectiontitle();
});
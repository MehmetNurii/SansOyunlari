//Oyunda Çekilen Sayılar
var SayisalLotoSayilari=[06,13,27,34,36,43];//7
var OnNumaraSayilari=[03,07,09,15,16,22,37,38,40,41,42,44,45,47,55,57,60,62,63,64,65,80];
var SuperLotoSayilari=[03,08,27,38,46,47];//6
var Sansli7Sayilari=[26,36,21,17,39,5,23];//7


function SayisalLoto(){
	var sayilar = ArrayOfRandomNumbers(49,6);
	return eslesme(sayilar,SayisalLotoSayilari,6,6);

}

function OnNumara(){
	var sayilar = ArrayOfRandomNumbers(80,10);
	return eslesme(sayilar,OnNumaraSayilari,10,22);
}

function SuperLoto(){
	var sayilar = ArrayOfRandomNumbers(54,6);
	return eslesme(sayilar,SuperLotoSayilari,6,6);
}

//
//Tempobet bahisleri
//

//hangibahis : Şanslı 7 oyunundan hangi bahis olduğu
function Sansli7(hangibahis){
	if(hangibahis==1){//1-42 arasında seçilmiş DÖRT adet numara bu çekilişte gelecek

		var sayilar = ArrayOfRandomNumbers(42,4);
		return eslesme(sayilar,Sansli7Sayilari,4,7);		
	}
	
	else if(hangibahis==2){//1-42 arasında seçilmiş numara bu çekilişte GELMEYECEK

		
		var sayilar = ArrayOfRandomNumbers(42,1);
		
		return eslesme(sayilar,Sansli7Sayilari,1,7);
		
	}
	
	else if(hangibahis==3){//Seçilen YEDİ numaranın en az BİRİ gelecek

		var sayilar = ArrayOfRandomNumbers(42,7);
		
		return eslesme(sayilar,ArrayOfRandomNumbers(42,7),7,7);
		
	}
}


function SayisalLotoOyna(){
	var kazanc=0;
	var bakiye=4000;
	var SayisalLotoUcreti=1.5;
	
	
	while(bakiye-SayisalLotoUcreti>0){
		var kactane = SayisalLoto();
		if(kactane==6){
			kazanc+=2031238.00;
			console.log("2.031.238,00 TL Kazandınız - 6'lı Tutturdunuz");
		}else if(kactane==5){
			kazanc+=4489.60;
			console.log("4.489,60 TL Kazandınız - 5'lı Tutturdunuz");
		}else if(kactane==4){
			kazanc+=78.10;
			//console.log("78,10 TL Kazandınız - 4'lı Tutturdunuz");
		}else if(kactane==3) {
			kazanc+=11.90;
			//console.log("11,90 TL Kazandınız - 3'lı Tutturdunuz");
		}else{
			
		}
		bakiye=bakiye-SayisalLotoUcreti;
	}
	console.log("Toplam Kazanç :"+kazanc+" - Yatırılan Tutar : +"+bakiye);
	
	return kazanc;
}

function OnNumaraOyna(){
	var bakiye=1000;
	var kazanc=0;
	var OnNumaraUcreti=1;
	
	
	while(bakiye-OnNumaraUcreti>0){
		var kactane = OnNumara();
		if(kactane==10){
			kazanc+=573269.90;
			console.log("");
		}else if(kactane==9){
			kazanc+=3822.15 ;
		}else if(kactane==8){
			kazanc+=190.85;
		}else if(kactane==7) {
			kazanc+=27.30;
		}else if(kactane==6) {
			kazanc+=4.60;
		}else if(kactane==0){
			kazanc+=3.15
		}else{
			
		}
		bakiye=bakiye-OnNumaraUcreti;
	}
	console.log("Toplam Kazanç :"+kazanc+" - Yatırılan Tutar : +"+2000);
	return kazanc;
}

function SuperLotoOyna(){
	var bakiye=1000;
	var kazanc=0;
	var SuperLotoUcreti=2;
	
	
	
	while(bakiye-SuperLotoUcreti>0){
		var kactane = SuperLoto();
		if(kactane==6){
			kazanc+=17520125.28;
		}else if(kactane==5){
			kazanc+=9978.50;
		}else if(kactane==4){
			kazanc+=171.10;
		}else if(kactane==3) {
			kazanc+=14.35;
		}else{
			
		}
		bakiye=bakiye-SuperLotoUcreti;
	}
	console.log("Toplam Kazanç :"+kazanc+" - Yatırılan Tutar : +"+2000);
	return kazanc;
}


//Tempobet SAYFASI


function SecilenNumaraninEnAzDorduGelecek(){
	var bakiye=2000;
	var ucret=1;
	while(bakiye-ucret>0){
		var kactane = Sansli7(1);
		if(kactane>=4){
			
			console.log(kactane +" sayı bildiniz --- Kazanç"+ ucret*100);
			kazanc +=ucret*100;
		}else{
			
		}
		bakiye=bakiye-ucret;
	}
	console.log("Toplam Kazanç :"+kazanc+" - Yatırılan Tutar : +"+2000);
	kazanc=0;
	return kazanc;
}

function SecilenNumaraBuCekilisteGelmeyecek(){
	clear();
	var bakiye=4000;
	var ucret=1000;
	var kazanan = 0;
	while(bakiye>1000){
		bakiye=bakiye-ucret;
		if(Sansli7(2)==0){
			bakiye+=1140;
			kazanan++;
			//console.warn("Kazanç:140 TL ");
		}else{
			
			//console.error("Kaybedilen 1000 Tl");
		};
		if(bakiye>10000)
		console.log(bakiye);
	}
	console.log("Toplam Kazanc"+(kazanan)*140+" TL --- Yatırılan Tutar : 1000 TL")
	
}

function SecilenYediNumaradanEnAzBiriGelecek(){
	var bakiye=10000;
	var ucret=10;
	var kazanc=0;
	
	while(bakiye-ucret>0){
	bakiye=bakiye-ucret;
		if(Sansli7(3)>4){
			kazanc=kazanc+ucret*1800;
		}
	}
	console.log("Kazanc"+kazanc+" ");
}

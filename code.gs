function doPost(e) {
  var hasil={}
  hasil['success']=false,
  hasil['pesan']='Email Gagal dikirim !',
  hasil['rows']=[]

  if (e.parameter.aksi==undefined){
      let dtpar=JSON.parse(e.postData.contents)
      var hasil=sendGmail2(dtpar.to,dtpar.judul,dtpar.isi)
  }
  else {
    var dt=eval(e)
    var hasil=sendGmail(dt)
  }
  return ContentService.createTextOutput(JSON.stringify(hasil)).setMimeType(ContentService.MimeType.JSON); 
}

function sendGmail2(to,judul,isi){
  var output={}
  output['success']=false,
  output['pesan']='',
  output['rows']=[]
  var hasil=MailApp.sendEmail({
    to:to,
    subject:judul,
    htmlBody:isi})
  output['success']=true
  output['pesan']='Data email berhasil terkirim !'
  output['rows']=[]

  return output;
}

function sendGmail(e){
  var output={}
  output['success']=false,
  output['pesan']='',
  output['rows']=[]
  var hasil=MailApp.sendEmail({
    to:e.parameter.to,
    subject:e.parameter.judul,
    htmlBody:e.parameter.isi})
  output['success']=true
  output['pesan']='Data email berhasil terkirim !'
  output['rows']=[]

  return output;
}

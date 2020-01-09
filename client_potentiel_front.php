<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    body{
      width: 100vw;
    }
    #main_form{
      width: 600px;
      height: 650px;
      background-color: grey;
      padding: 10px;
      box-shadow: 10px 5px 5px black;
      padding: 24px 55px;
    }

    </style>
  </head>
  <body>

<h1 class="text-center">CLIENT POTENTIEL</h1>
<form class="mx-auto " action="client_potentiel.php" method="post" id="main_form">

      <div class="">
        <div class="row mx-auto">
          <div class="name">Nom</div>
          <div class="value">
            <input class="input--style-6" type="text" name="nom">
          </div>

          <div class="name">Prenom</div>
          <div class="value">
              <input class="input--style-6" type="text" name="prenom">
          </div>
        </div>

        <div class="name">Zip</div>
        <div class="value">
          <input class="input--style-6" type="text" name="cp">
        </div>

        <div class="name">Adresse</div>
        <div class="value">
          <input class="input--style-6 col-sm-6" type="text" name="adresse">
        </div>

        <div class="name">Ville</div>
        <div class="value">
          <input class="input--style-6 col-sm-6" type="text" name="ville">
        </div>

        <div class="name">Telephone</div>
        <div class="value">
          <input class="input--style-6 col-sm-6" type="text" name="telephone">
        </div>

  </div>

      <div class="form-row">
          <div class="name">Email address</div>
          <div class="value">
              <div class="input-group">
                  <input class="input--style-6 col-sm-12" type="email" name="email" placeholder="example@email.com">
              </div>
          </div>
      </div>

      <div class="form-row">
          <div class="name">Justificatif d'identité</div>
          <div class="value">
              <div class="input-group js-input-file">
                  <input class="input-file" type="file" name="justif_identite" id="file">
                  <label class="label--file" for="file">Choose file</label>

              </div>
              <div class="label--desc">Upload Justificatif d'identité/Resume or any other relevant file. Max file size 50 MB</div>
          </div>
      </div>

      <div class="form-row">
          <div class="name">Justificatif de salaire</div>
          <div class="value">
              <div class="input-group js-input-file">
                  <input class="input-file " type="file" name="justif_salaire" id="file">


              </div>
              <div class="label--desc">Upload ton Justificatif de salaire/Resume or any other relevant file. Max file size 50 MB</div>
          </div>
      </div>

      <div class="form-row">
          <div class="name">Justificatif de domicile</div>
          <div class="value">
              <div class="input-group js-input-file">
                  <input class="input-file " type="file" name="justif_domicile"  <label class="label--file" for="file">Choose file</label>

              </div>
              <div class="label--desc">Upload ton justificatif de domicile /Resume or any other relevant file. Max file size 50 MB</div>
          </div>
      </div>

      <div class="card-footer p-2">
          <button class="btn btn-primary" type="submit">Envoi Formulaire</button>
      </div>


</form>
  </body>
</html>

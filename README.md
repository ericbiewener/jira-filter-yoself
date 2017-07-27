A chrome extension to automatically filter by an asignee when at the URL `https://*.atlassian.net/secure/RapidBoard.jspa`.

Just append `&asignee=<my_name>` to the URL. To figure out `my_name`, inspect the DOM for the `<label>` in the `Asignee` dropdown. You want the value in the `for` attribute. It is probably your first name, lower case.

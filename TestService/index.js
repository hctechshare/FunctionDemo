module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var clients = [{
        "ClientId": 1,
        "FirstName": "Ginger",
        "MiddleName": "Glenda",
        "LastName": "Garza",
        "DateOfBirth": "1993-11-12",
        "Gender": "Trans Female (MTF or Male to Female)",
        "VeteranStatus": "Yes (HUD)",
        "EnteredBy": "ueeakrk283@krbh-w.org",
        "EnteredDate": "1998-10-18T05:29:30.11Z",
        "LastChangedBy": "jppxeok@sqvrni.com",
        "LastChangedDate": "2001-04-06T03:26:29.15Z"
    }, {
        "ClientId": 2,
        "FirstName": "Jami",
        "MiddleName": "Garry",
        "LastName": "Hensley",
        "DateOfBirth": "2003-03-06",
        "Gender": "Gender Non-Conforming (i.e. not exclusively male or female)",
        "VeteranStatus": "Data not collected (HUD)",
        "EnteredBy": "ycgtzec.rnfvh@ucqwvj.com",
        "EnteredDate": "1957-09-24T13:04:27.86Z",
        "LastChangedBy": "dnqqh.fssphmo@yfpyqe.org",
        "LastChangedDate": "1990-01-02T08:15:48.39Z"
    }, {
        "ClientId": 3,
        "FirstName": "Erika",
        "MiddleName": "Josh",
        "LastName": "Doyle",
        "DateOfBirth": "1958-01-10",
        "Gender": "Gender Non-Conforming (i.e. not exclusively male or female)",
        "VeteranStatus": "Data not collected (HUD)",
        "EnteredBy": "qxvexc2@ctrrgdfn.vjpcvv.com",
        "EnteredDate": "2001-10-19T19:40:50.83Z",
        "LastChangedBy": "lhercckv.bwtyijs@tfmye.xshskc.net",
        "LastChangedDate": "1968-09-09T23:07:31.77Z"
    }];

    if (req.body && req.body.table) {
        if (req.body.table == "clients") {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: clients
            };
        }
    }
};
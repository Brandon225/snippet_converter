$('#convert-from').on('change', function()
{
    var selected = $(this).val();

    console.log('selected? ', selected);

    var $to = $('#convert-to');
    var $toOpt = $('#convert-to option[value="' + selected + '"]');

    console.log('toOpt? ', $toOpt);

    // first enable all options
    $to.children().attr('disabled', false);

    // then disable selected option
    $toOpt.attr('disabled', true);

    // hide all formats
    $('.format').hide();

    // reset select value of to input
    $to.val('');

    if (selected === 'visual_code')
    {
        $('.scope-select').show();
        $('select[name=scope_from]').attr('required', true);

    } else {

        $('.scope-select').hide();
        $('select[name=scope_from]').attr('required', false);

        $('#format-' + selected).show();
    }
});


$('#converter-form').submit(function(event)
{
    event.preventDefault();

    // hide error's if needed
    toggleInputError('#from-fg', false);

    var error = false;

    // Find the value of select
    var from = $('select[name=convert_from]').val();
    var to = $('select[name=convert_to]').val();

    // var $toTextArea = $('textarea[name=convert_to_text]');

    // Grab the text from the FROM textarea
    var snipText = $('textarea[name=convert_from_text]').val();

    //console.log('from? ', from);
    //console.log('to? ', to);
    //console.log('snipText? ', snipText);

    // Handle if select is atom
    if (from === 'atom')
    {
        //console.log('Convert from is atom!');

        var snipObj = parseAtom(snipText);
        if (snipObj)
        {
            if (to === 'sublime')
            {
                populateToText(createSublime(snipObj.content, snipObj.trigger, snipObj.scope, snipObj.description));
            }

            if (to === 'brackets')
            {
                populateToText(createBrackets(snipObj.content, snipObj.trigger, snipObj.scope, snipObj.description));
            }

            if (to === 'visual_code')
            {
                populateToText(createVisualCode(snipObj.content, snipObj.trigger, snipObj.scope, snipObj.description));
            }
        } else {
            error = true;
            toggleInputError('#from-fg', true, 'atom');
        }

    }

    // Handle if select is sublime
    if (from === 'sublime')
    {
        // Parse the xml
        var $xml = parseSublime(snipText);
        if ($xml)
        {
            var $content = $xml.find('content'),
            $trigger = $xml.find('tabTrigger'),
            $scope = $xml.find('scope'),
            $description = $xml.find('description');

            //console.log('xml? ', $xml);
            // Convert the parsed data into Atom's format
            if (to === 'atom')
            {
                populateToText(createAtom($content.text(), $trigger.text(), $scope.text(), $description.text()));
            }

            // Convert the parsed data into Bracket's format
            if (to === 'brackets')
            {
                //console.log('To brackets!');

                populateToText(createBrackets($content.text(), $trigger.text(), $scope.text(), $description.text()));
            }

            if (to === 'visual_code')
            {
                populateToText(createVisualCode($content.text(), $trigger.text(), $scope.text(), $description.text()));
            }
        } else {
            error = true;
            toggleInputError('#from-fg', true, 'sublime');
        }


    }

    if (from === 'visual_code')
    {
        var $json = parseVisualCode(snipText);
        if ($json)
        {
            var $inJson;
            for (var key in $json)
            {
               //console.log(' name=' + key + ' value=' + $json[key]);
               $inJson = $json[key];
            }

            // var content = $body.split('\n');
            var contentVC = '';
            $.each($inJson['body'], function (index, value)
            {
                contentVC += value + '\n';
                //console.log('content: ', value);

            });

            //console.log('content: ', content);

            // //console.log('visual code content? ', content);
            var triggerVC = $inJson['prefix'];
            var scopeVC = $('select[name=scope_from]').val();
            var descriptionVC = $inJson['description'];

            //console.log('createSublime CONTENT: ' + content + ' TRIGGER: ' + trigger + ' SCOPE: ' + scope + ' DESC: ' + description);

            if (to === 'sublime')
            {
                populateToText(createSublime(contentVC, triggerVC, scopeVC, descriptionVC));
            }

            if (to === 'atom')
            {
                populateToText(createAtom(contentVC, triggerVC, scopeVC, descriptionVC));
            }

            if (to === 'brackets')
            {
                populateToText(createBrackets(contentVC, triggerVC, scopeVC, descriptionVC));
            }

        } else {
            error = true;
            toggleInputError('#from-fg', true, 'viscode');
        }
    }

    if (from === 'brackets')
    {
        var $jsonBracObj = parseBrackets(snipText);

        console.log('jsonBracObj? ', $jsonBracObj);

        if ($jsonBracObj)
        {
            var $jsonBrac = $jsonBracObj[0];

            var content = $jsonBrac['template'];
            var trigger = $jsonBrac['trigger'];
            var scope = $jsonBrac['usage'];
            var description = $jsonBrac['description'];

            //console.log('brackets jsonBrac? ', $jsonBrac);

            if (to === 'sublime')
            {
                populateToText(createSublime(content, trigger, scope, description));
            }

            if (to === 'atom')
            {
                populateToText(createAtom(content, trigger, scope, description));
            }

            if (to === 'visual_code')
            {
                populateToText(createVisualCode(content, trigger, scope, description));
            }

        } else {
            error = true;
            toggleInputError('#from-fg', true, 'brackets');
        }

    }

    // Uncomment if using Share overlay!!!!
    // if (!error)
    // {
    //     $('.share-overlay').toggle();
    //     $('body').addClass('modal-open');
    // }
});

function populateToText(text)
{
    $('textarea[name=convert_to_text]').val(text);
}

function createAtom(content, trigger, scope, description)
{
    //console.log('createAtom content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);

    var atomSnip = "";


    // append a period to the beginning of scope
    atomSnip += '".' + scope + '":\n   ';
    atomSnip += '"' + description + '":\n       ';
    atomSnip += '"prefix": "' + trigger + '"\n       ';
    atomSnip += '"body": """' + content + '""" \n       ';

    return atomSnip;
}

function createBrackets(content, trigger, scope, description)
{
    var jsonObj = [];
    var snipArray = {};
    snipArray["name"] = description;
    snipArray["trigger"] = trigger;
    snipArray["usage"] = scope;
    snipArray["description"] = description;
    snipArray["template"] = content;
    // snipArray["inline"] = description;

    jsonObj.push(snipArray);

    return JSON.stringify(jsonObj);
}

function createVisualCode(content, trigger, scope, description)
{
    /*"For Loop": {
        "prefix": "for",
        "body": [
            "for (var ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
            "\tvar ${3:element} = ${2:array}[${1:index}];",
            "\t$0",
            "}"
        ],
        "description": "For Loop"
    },*/

    //console.log('createVisualCode content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);

    var jsonObj = new Object();
    jsonObj.prefix = trigger;

    var body = content.split('\n');
    var bodyContent = '';
    $.each(body, function (index, value)
    {
        console.log('body index: ' + index + ' value: ' + value);
        bodyContent += $.trim(value) + '\n';
    });

    console.log('bodyContent? ', bodyContent);
    jsonObj.body = bodyContent.split('\n');

    console.log('jsonObj body? ', jsonObj.body);

    jsonObj.description = description;

    var title = description;

    var jsonArray = {};
    jsonArray[title] = jsonObj;
    // {title: jsonObj}
    return JSON.stringify(jsonArray);
}

// function createVisualStudio(content, trigger, scope, description)
// {
//     var vsSnip = '<?xml version="1.0" encoding="utf-8"?><CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet"><CodeSnippet Format="1.0.0"><Header><Title>' + $description + '</Title>';
//
//     vsSnip += '</Header><Snippet><Code Language="'+ $scope +'">';
//     vsSnip += '<![CDATA[' + content + ']]></Code></Snippet></CodeSnippet></CodeSnippets>';
//
//     return vsSnip;
// }

function createSublime(content, trigger, scope, description)
{
    //console.log('createSublime content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);
    var subText = '<snippet><content><![CDATA['+ content + ']]></content>';
    subText += '<tabTrigger>' + trigger  + '</tabTrigger>';
    subText += '<scope>' + scope  + '</scope>';
    subText += '<description>' + description  + '</description></snippet>';

    return subText;
}

function parseAtom(snipText)
{
    console.log('parseAtom snipText first char? ', snipText.charAt(0));

    if (snipText.charAt(0) === "\"")
    {
        console.log('firstChar is quotation! ', snipText);
        var snipObj = new Object();
        snipText = snipText.replace(/"/g, "").replace(/'/, "");
        snipText = $.trim(snipText);
        var snippet = snipText.split('\n');
        for (var i = 0; i < snippet.length; i++)
        {
            var row = $.trim(snippet[i]);

            if (row.startsWith('prefix'))
            {
                var value = $.trim(row.replace('prefix:', ''));
                //console.log('value: ', value);

                var updatedRow = $.trim(row.replace(value, ''));

                snipObj.trigger = value;

            } else if (i === snippet.length-1)
            {

                if (snippet.length > 4)
                {
                    var content = '';
                    for (var idx = 3; idx < snippet.length; idx++)
                    {
                        var contentRow = snippet[idx];
                        if (idx === 3)
                        {
                            content += $.trim(contentRow.replace('body:', '')) + '\n';
                        } else {
                            content += contentRow + '\n';
                        }
                    }

                    snipObj.content = content;
                } else {

                    var value = $.trim(row);
                    snipObj.content = value;
                }

            } else if (i === 1) {

                var value = $.trim(row.replace(':', ''));

                snipObj.description = value;


            } else if (i === 0)
            {

                var value = $.trim(row.replace(':', ''));

                snipObj.scope = value.replace('.','');

            }
        }
        return snipObj;

    } else {
        return;
    }

}

function parseBrackets(snipText)
{
    var json = '';
    try {
        console.log('IS valid json: ', json);
        return JSON.parse(snipText);

    } catch (err) {

        console.log('NOT valid json err: ', err);
        return;
    }
}

function parseVisualCode(snipText)
{
    var json = '';
    try {
        console.log('IS valid json: ', json);
        return JSON.parse(snipText);

    } catch (err) {

        console.log('NOT valid json err: ', err);
        return;
    }
}

function parseSublime(snipText)
{

    var xmlDoc = '';

    try {
        console.log('IS valid xmlDoc');
        xmlDoc = $.parseXML(snipText); //is valid XML
        return $( xmlDoc );

    } catch (err) {
        console.log('NOT valid xmlDoc err: ', err);
        // was not XML
        return;
    }
}

function toggleInputError(input, show, type)
{
    console.log('toggleInputError: '+ input + ' show? ' + show + ' type? ' + type);

    if (show)
    {
        if (type)
        {
            $('#error-link').prop('href', 'details.html#' + type);
        }
        $(input).addClass('has-error');
        $(input).find('.error-block').css('display', 'block');

    } else {

        $(input).removeClass('has-error');
        $(input).find('.error-block').css('display', 'none');
    }
}

$('[type="submit"]').mouseenter(function()
{
    console.log('Mouse!');
});


/*Smooth link animation*/
$('a[href*="#"]:not([href="#"])').click(function()
{
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname)
    {
        smoothScroll(this.hash);
    }
});

function smoothScroll(id)
{
    var target = $(id);
    target = target.length ? target : $('[name=' + id.slice(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - 80
        }, 1000);
        return false;
    }
}

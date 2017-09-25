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

    if (selected === 'visual_code')
    {
        $('.scope-select').show();
        $('select[name=scope_from]').attr('required', true);

    } else {
        $('.scope-select').hide();
        $('select[name=scope_from]').attr('required', false);
    }

});
$('#converter-form').submit(function(event)
{

    console.log('Submit button clicked!');

    event.preventDefault();

    // Find the value of select
    var from = $('select[name=convert_from]').val();
    var to = $('select[name=convert_to]').val();

    var $toTextArea = $('textarea[name=convert_to_text]');

    // Grab the text from the FROM textarea
    var snipText = $('textarea[name=convert_from_text]').val();

    console.log('from? ', from);
    console.log('to? ', to);
    console.log('snipText? ', snipText);

    // Handle if select is atom
    if (from === 'atom')
    {
        console.log('Convert from is atom!');

        var snipObj = parseAtom(snipText);

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

    }

    // Handle if select is sublime
    if (from === 'sublime')
    {
        // Parse the xml
        var $xml = parseSublime(snipText),
        $content = $xml.find('content'),
        $trigger = $xml.find('tabTrigger'),
        $scope = $xml.find('scope'),
        $description = $xml.find('description');

        console.log('xml? ', $xml);
        // Convert the parsed data into Atom's format
        if (to === 'atom')
        {
            populateToText(createAtom($content.text(), $trigger.text(), $scope.text(), $description.text()));
        }

        // Convert the parsed data into Bracket's format
        if (to === 'brackets')
        {
            console.log('To brackets!');

            populateToText(createBrackets($content.text(), $trigger.text(), $scope.text(), $description.text()));
        }

        if (to === 'visual_code')
        {
            populateToText(createVisualCode($content.text(), $trigger.text(), $scope.text(), $description.text()));
        }

    }

    if (from === 'visual_code')
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

        var scope = $('select[name=scope_select]').val();

        var $json = parseVisualCode(snipText);
        var $inJson;
        for (var key in $json)
        {
           console.log(' name=' + key + ' value=' + $json[key]);
           $inJson = $json[key];
        }

        // var content = $body.split('\n');
        var content = '';
        $.each($inJson['body'], function (index, value)
        {
            content += value + '\n';
            console.log('content: ', value);

        });

        console.log('content: ', content);

        // console.log('visual code content? ', content);
        var trigger = $inJson['prefix'];
        var scope = $('select[name=scope_from]').val();
        var description = $inJson['description'];

        console.log('createSublime CONTENT: ' + content + ' TRIGGER: ' + trigger + ' SCOPE: ' + scope + ' DESC: ' + description);

        if (to === 'sublime')
        {
            populateToText(createSublime(content, trigger, scope, description));
        }

        if (to === 'atom')
        {
            populateToText(createAtom(content, trigger, scope, description));
        }

        if (to === 'brackets')
        {
            populateToText(createBrackets(content, trigger, scope, description));
        }
    }

    if (from === 'brackets')
    {
        var $json = parseBrackets(snipText)[0];

        var content = $json['template'];
        var trigger = $json['trigger'];
        var scope = $json['usage'];
        var description = $json['description'];

        console.log('brackets json? ', $json);

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

    }
});

function populateToText(text)
{
    $('textarea[name=convert_to_text]').val(text);
}

function createAtom(content, trigger, scope, description)
{
    console.log('createAtom content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);

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

    console.log('createVisualCode content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);

    var jsonObj = new Object();
    jsonObj.prefix = trigger;
    jsonObj.body = content.split('\n');
    jsonObj.description = description;

    var title = description;

    return JSON.stringify({[title]: jsonObj});
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
    console.log('createSublime content: ' + content + ' trigger: ' + trigger + ' scope: ' + scope + ' desc: ' + description);
    var subText = '<snippet><content><![CDATA['+ content + ']]></content>';
    subText += '<tabTrigger>' + trigger  + '</tabTrigger>';
    subText += '<scope>' + scope  + '</scope>';
    subText += '<description>' + description  + '</description></snippet>';

    return subText;
}

function parseAtom(snipText)
{
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
            console.log('value: ', value);

            var updatedRow = $.trim(row.replace(value, ''));

            snipObj.trigger = value;

        } else if (i === snippet.length-1)
        {
            // var value = $.trim(row.replace('body:', ''));
            //
            console.log('snippet.length: ', snippet.length);

            if (snippet.length > 4)
            {
                // console.log('string at index 4? ', snippet[3]);

                var content = '';
                for (var idx = 3; idx < snippet.length; idx++)
                {
                    var contentRow = snippet[idx];
                    if (idx === 3)
                    {
                        content += $.trim(contentRow.replace('body:', ''));
                    } else {
                        content += contentRow;
                    }
                }

                console.log('atom parsed content? ', content);
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
}

function parseBrackets(snipText)
{
    return JSON.parse(snipText);
}

function parseVisualCode(snipText)
{
    return JSON.parse(snipText);
}

function parseSublime(snipText)
{
    var xmlDoc = $.parseXML( snipText );
    return $( xmlDoc );
}

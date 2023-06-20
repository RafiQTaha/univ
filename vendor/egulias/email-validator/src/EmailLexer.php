<?php

namespace Egulias\EmailValidator;

use Doctrine\Common\Lexer\AbstractLexer;

<<<<<<< HEAD
/**
 * @extends AbstractLexer<int, string>
 */
class EmailLexer extends AbstractLexer
{
    //ASCII values
    public const S_EMPTY            = null;
    public const C_NUL              = 0;
    public const S_HTAB             = 9;
    public const S_LF               = 10;
    public const S_CR               = 13;
    public const S_SP               = 32;
    public const EXCLAMATION        = 33;
    public const S_DQUOTE           = 34;
    public const NUMBER_SIGN        = 35;
    public const DOLLAR             = 36;
    public const PERCENTAGE         = 37;
    public const AMPERSAND          = 38;
    public const S_SQUOTE           = 39;
    public const S_OPENPARENTHESIS  = 40;
    public const S_CLOSEPARENTHESIS = 41;
    public const ASTERISK           = 42;
    public const S_PLUS             = 43;
    public const S_COMMA            = 44;
    public const S_HYPHEN           = 45;
    public const S_DOT              = 46;
    public const S_SLASH            = 47;
    public const S_COLON            = 58;
    public const S_SEMICOLON        = 59;
    public const S_LOWERTHAN        = 60;
    public const S_EQUAL            = 61;
    public const S_GREATERTHAN      = 62;
    public const QUESTIONMARK       = 63;
    public const S_AT               = 64;
    public const S_OPENBRACKET      = 91;
    public const S_BACKSLASH        = 92;
    public const S_CLOSEBRACKET     = 93;
    public const CARET              = 94;
    public const S_UNDERSCORE       = 95;
    public const S_BACKTICK         = 96;
    public const S_OPENCURLYBRACES  = 123;
    public const S_PIPE             = 124;
    public const S_CLOSECURLYBRACES = 125;
    public const S_TILDE            = 126;
    public const C_DEL              = 127;
    public const INVERT_QUESTIONMARK= 168;
    public const INVERT_EXCLAMATION = 173;
    public const GENERIC            = 300;
    public const S_IPV6TAG          = 301;
    public const INVALID            = 302;
    public const CRLF               = 1310;
    public const S_DOUBLECOLON      = 5858;
    public const ASCII_INVALID_FROM = 127;
    public const ASCII_INVALID_TO   = 199;
=======
class EmailLexer extends AbstractLexer
{
    //ASCII values
    const S_EMPTY            = null;
    const C_NUL              = 0;
    const S_HTAB             = 9;
    const S_LF               = 10;
    const S_CR               = 13;
    const S_SP               = 32;
    const EXCLAMATION        = 33;
    const S_DQUOTE           = 34;
    const NUMBER_SIGN        = 35;
    const DOLLAR             = 36;
    const PERCENTAGE         = 37;
    const AMPERSAND          = 38;
    const S_SQUOTE           = 39;
    const S_OPENPARENTHESIS  = 40;
    const S_CLOSEPARENTHESIS = 41;
    const ASTERISK           = 42;
    const S_PLUS             = 43;
    const S_COMMA            = 44;
    const S_HYPHEN           = 45;
    const S_DOT              = 46;
    const S_SLASH            = 47;
    const S_COLON            = 58;
    const S_SEMICOLON        = 59;
    const S_LOWERTHAN        = 60;
    const S_EQUAL            = 61;
    const S_GREATERTHAN      = 62;
    const QUESTIONMARK       = 63;
    const S_AT               = 64;
    const S_OPENBRACKET      = 91;
    const S_BACKSLASH        = 92;
    const S_CLOSEBRACKET     = 93;
    const CARET              = 94;
    const S_UNDERSCORE       = 95;
    const S_BACKTICK         = 96;
    const S_OPENCURLYBRACES  = 123;
    const S_PIPE             = 124;
    const S_CLOSECURLYBRACES = 125;
    const S_TILDE            = 126;
    const C_DEL              = 127;
    const INVERT_QUESTIONMARK= 168;
    const INVERT_EXCLAMATION = 173;
    const GENERIC            = 300;
    const S_IPV6TAG          = 301;
    const INVALID            = 302;
    const CRLF               = 1310;
    const S_DOUBLECOLON      = 5858;
    const ASCII_INVALID_FROM = 127;
    const ASCII_INVALID_TO   = 199;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca

    /**
     * US-ASCII visible characters not valid for atext (@link http://tools.ietf.org/html/rfc5322#section-3.2.3)
     *
     * @var array
     */
    protected $charValue = array(
        '{'    => self::S_OPENCURLYBRACES,
        '}'    => self::S_CLOSECURLYBRACES,
        '('    => self::S_OPENPARENTHESIS,
        ')'    => self::S_CLOSEPARENTHESIS,
        '<'    => self::S_LOWERTHAN,
        '>'    => self::S_GREATERTHAN,
        '['    => self::S_OPENBRACKET,
        ']'    => self::S_CLOSEBRACKET,
        ':'    => self::S_COLON,
        ';'    => self::S_SEMICOLON,
        '@'    => self::S_AT,
        '\\'   => self::S_BACKSLASH,
        '/'    => self::S_SLASH,
        ','    => self::S_COMMA,
        '.'    => self::S_DOT,
        "'"    => self::S_SQUOTE,
        "`"    => self::S_BACKTICK,
        '"'    => self::S_DQUOTE,
        '-'    => self::S_HYPHEN,
        '::'   => self::S_DOUBLECOLON,
        ' '    => self::S_SP,
        "\t"   => self::S_HTAB,
        "\r"   => self::S_CR,
        "\n"   => self::S_LF,
        "\r\n" => self::CRLF,
        'IPv6' => self::S_IPV6TAG,
        ''     => self::S_EMPTY,
        '\0'   => self::C_NUL,
        '*'    => self::ASTERISK,
        '!'    => self::EXCLAMATION,
        '&'    => self::AMPERSAND,
        '^'    => self::CARET,
        '$'    => self::DOLLAR,
        '%'    => self::PERCENTAGE,
        '~'    => self::S_TILDE,
        '|'    => self::S_PIPE,
        '_'    => self::S_UNDERSCORE,
        '='    => self::S_EQUAL,
        '+'    => self::S_PLUS,
        '¿'    => self::INVERT_QUESTIONMARK,
        '?'    => self::QUESTIONMARK,
        '#'    => self::NUMBER_SIGN,
        '¡'    => self::INVERT_EXCLAMATION,
    );

    /**
     * @var bool
     */
    protected $hasInvalidTokens = false;

    /**
     * @var array
     *
     * @psalm-var array{value:string, type:null|int, position:int}|array<empty, empty>
     */
    protected $previous = [];

    /**
     * The last matched/seen token.
     *
<<<<<<< HEAD
     * @var array|Token
     *
     * @psalm-suppress NonInvariantDocblockPropertyType
     * @psalm-var array{value:string, type:null|int, position:int}|Token<int, string>
=======
     * @var array
     *
     * @psalm-suppress NonInvariantDocblockPropertyType
     * @psalm-var array{value:string, type:null|int, position:int}
     * @psalm-suppress NonInvariantDocblockPropertyType
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
     */
    public $token;

    /**
     * The next token in the input.
     *
<<<<<<< HEAD
     * @var array|Token|null
     *
     * @psalm-suppress NonInvariantDocblockPropertyType
     * @psalm-var array{position: int, type: int|null|string, value: int|string}|Token<int, string>|null
     */
    public $lookahead;

    /** @psalm-var array{value:'', type:null, position:0} */
    private static $nullToken = [
        'value' => '',
        'type' => null,
        'position' => 0,
    ];
=======
     * @var array|null
     */
    public $lookahead;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca

    /**
     * @psalm-var array{value:'', type:null, position:0}
     */
    private static $nullToken = [
        'value' => '',
        'type' => null,
        'position' => 0,
    ];

    /**
     * @var string
     */
    private $accumulator = '';

    /**
     * @var bool
     */
    private $hasToRecord = false;

    public function __construct()
    {
        $this->previous = $this->token = self::$nullToken;
        $this->lookahead = null;
    }

<<<<<<< HEAD
    public function reset() : void
=======
    /**
     * @return void
     */
    public function reset()
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        $this->hasInvalidTokens = false;
        parent::reset();
        $this->previous = $this->token = self::$nullToken;
<<<<<<< HEAD
=======
    }

    /**
     * @return bool
     */
    public function hasInvalidTokens()
    {
        return $this->hasInvalidTokens;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    }

    /**
     * @param int $type
     * @throws \UnexpectedValueException
     * @return boolean
     *
     * @psalm-suppress InvalidScalarArgument
     */
<<<<<<< HEAD
    public function find($type) : bool
=======
    public function find($type)
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        $search = clone $this;
        $search->skipUntil($type);

        if (!$search->lookahead) {
            throw new \UnexpectedValueException($type . ' not found');
        }
        return true;
    }

    /**
     * getPrevious
     *
     * @return array
     */
    public function getPrevious()
    {
        return $this->previous;
    }

    /**
     * moveNext
     *
     * @return boolean
     */
<<<<<<< HEAD
    public function moveNext() : bool
    {
        if ($this->hasToRecord && $this->previous === self::$nullToken) {
            $this->accumulator .= ((array) $this->token)['value'];
        }

        $this->previous = (array) $this->token;

        if($this->lookahead === null) {
            $this->lookahead = self::$nullToken;
=======
    public function moveNext()
    {
        if ($this->hasToRecord && $this->previous === self::$nullToken) {
            $this->accumulator .= $this->token['value'];
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }

        $this->previous = $this->token;
        $hasNext = parent::moveNext();
<<<<<<< HEAD

        if ($this->hasToRecord) {
            $this->accumulator .= ((array) $this->token)['value'];
=======
        $this->token = $this->token ?: self::$nullToken;

        if ($this->hasToRecord) {
            $this->accumulator .= $this->token['value'];
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }

        return $hasNext;
    }

    /**
     * Lexical catchable patterns.
     *
     * @return string[]
     */
    protected function getCatchablePatterns()
    {
        return array(
            '[a-zA-Z]+[46]?', //ASCII and domain literal
            '[^\x00-\x7F]',  //UTF-8
            '[0-9]+',
            '\r\n',
            '::',
            '\s+?',
            '.',
            );
    }

    /**
     * Lexical non-catchable patterns.
     *
     * @return string[]
     */
    protected function getNonCatchablePatterns()
    {
        return [
            '[\xA0-\xff]+',
        ];
    }

    /**
     * Retrieve token type. Also processes the token value if necessary.
     *
     * @param string $value
     * @throws \InvalidArgumentException
     * @return integer
     */
    protected function getType(&$value)
    {
        $encoded = $value;

        if (mb_detect_encoding($value, 'auto', true) !== 'UTF-8') {
            $encoded = utf8_encode($value);
        }

        if ($this->isValid($encoded)) {
            return $this->charValue[$encoded];
        }

        if ($this->isNullType($encoded)) {
            return self::C_NUL;
        }

        if ($this->isInvalidChar($encoded)) {
            $this->hasInvalidTokens = true;
            return self::INVALID;
        }


        return  self::GENERIC;
    }

<<<<<<< HEAD
    protected function isValid(string $value) : bool
=======
    protected function isInvalidChar(string $value) : bool
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        if(preg_match("/[^\p{S}\p{C}\p{Cc}]+/iu", $value) ) {
            return false;
        }
        return true;
    }

<<<<<<< HEAD
    protected function isNullType(string $value) : bool
=======
    protected function isValid(string $value) : bool
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        if (isset($this->charValue[$value])) {
            return true;
        }

<<<<<<< HEAD
    protected function isInvalidChar(string $value) : bool
    {
        return !preg_match(self::INVALID_CHARS_REGEX, $value);
    }

    protected function isUTF8Invalid(string $value) : bool
    {
        return preg_match(self::VALID_UTF8_REGEX, $value) !== false;
    }

    public function hasInvalidTokens() : bool
    {
        return $this->hasInvalidTokens;
    }

    /**
     * getPrevious
     *
     * @return array
     */
    public function getPrevious() : array
=======
        return false;
    }

    /**
     * @param string $value
     * @return bool
     */
    protected function isNullType($value)
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        if ($value === "\0") {
            return true;
        }

        return false;
    }

    protected function isUTF8Invalid(string $value) : bool
    {
        if (preg_match('/\p{Cc}+/u', $value)) {
            return true;
        }

        return false;
    }

    /**
     * @return string
     */
<<<<<<< HEAD
    protected function getCatchablePatterns() : array
=======
    protected function getModifiers()
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    {
        return 'iu';
    }

<<<<<<< HEAD
    /**
     * Lexical non-catchable patterns.
     *
     * @return string[]
     */
    protected function getNonCatchablePatterns() : array
    {
        return self::NON_CATCHABLE_PATTERNS;
    }

    protected function getModifiers() : string
    {
        return self::MODIFIERS;
    }

=======
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    public function getAccumulatedValues() : string
    {
        return $this->accumulator;
    }

    public function startRecording() : void
    {
        $this->hasToRecord = true;
    }

    public function stopRecording() : void
    {
        $this->hasToRecord = false;
    }

    public function clearRecorded() : void
    {
        $this->accumulator = '';
    }
}

<?php

namespace Egulias\EmailValidator\Warning;

abstract class Warning
{
<<<<<<< HEAD
    public const CODE = 0;
=======
    const CODE = 0;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca

    /**
     * @var string
     */
    protected $message = '';

    /**
     * @var int
     */
    protected $rfcNumber = 0;

    /**
     * @return string
     */
    public function message()
    {
        return $this->message;
    }

    /**
     * @return int
     */
    public function code()
    {
        return self::CODE;
    }

    /**
     * @return int
     */
    public function RFCNumber()
    {
        return $this->rfcNumber;
    }

    public function __toString()
    {
<<<<<<< HEAD
        return $this->message() . " rfc: " .  $this->rfcNumber . "internal code: " . static::CODE;
=======
        return $this->message() . " rfc: " .  $this->rfcNumber . "interal code: " . static::CODE;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    }
}
